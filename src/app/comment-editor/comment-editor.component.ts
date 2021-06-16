import { stringify } from '@angular/compiler/src/util';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'comment-editor',
	templateUrl: './comment-editor.component.html',
	styleUrls: ['./comment-editor.component.css']
})
export class CommentEditorComponent {
	@ViewChild("commentEditor") commentEditor: ElementRef;
	@ViewChild("resultScreen") resultScreen: ElementRef;

	constructor() {}

	private resultQry: string = "";

	makeQueries(): void {
		let columns = this.commentEditor.nativeElement.getElementsByTagName("div");
		console.log("columns?", columns);
		let columnLen = columns.length;
		console.log("columns length?", columnLen);

		for(let i = 0; i < columnLen; i++) {
			let curColumn = columns[i];
			console.log("current column?", curColumn);
			let childs = curColumn.childNodes;
			console.log("child nodes?", childs);

			let exist = this.ifCommentExists(childs);
			console.log("comment eixsts?", exist);

			if(exist) {
				// get contents
				let table = childs[2].textContent.trim();
				let column = childs[4].textContent.trim();
				let comment = childs[6].textContent.trim();
				let dataType = childs[8].textContent.trim();
				let query = "";
				
				// create insert query
				query = this.createQry(table, column, comment, dataType);
				console.log("created qry:", query);

				// add query
				this.resultQry = this.resultQry + query;
			} else {
				// do nothing
			}
		}

		this.displayResult(this.resultQry);
	}

	ifCommentExists(divChilds: Array<string>): boolean {
		var len = divChilds.length;
		
		if(len >= 9) {
			return true;
		} else {
			return false;
		}
	}

	createQry(table: string, column: string, comment: string, dataType: string): string {
		console.log(`creating qry : ${table}, ${column}, ${comment}, ${dataType}`);

		let query = `ALTER TABLE ${table} MODIFY COLUMN ${column} ${dataType} COMMENT '${comment}';\n`;

		return query;
	}

	displayResult(resultQry: string) {
		console.log("======================");
		console.log(resultQry);
		this.resultScreen.nativeElement.innerHTML = resultQry;
	}
	
}

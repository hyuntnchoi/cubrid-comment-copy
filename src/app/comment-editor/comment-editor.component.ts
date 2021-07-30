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
		let columns = this.commentEditor.nativeElement
							.getElementsByTagName("div");
		let columnLen = columns.length;

		for(let i = 0; i < columnLen; i++) {
			let curColumn = columns[i];
			let childs = curColumn.childNodes;

			// get contents
			let table = childs[2].textContent.trim();
			let column = childs[4].textContent.trim();
			let comment = childs[6].textContent.trim();
			let dataType = childs[8].textContent.trim();
			let query = "";
			
			// create insert query
			query = this.createQry(table, column, comment, dataType);

			// add query
			this.resultQry = this.resultQry + query;
		}

		this.displayResult(this.resultQry);
	}

	createQry(table: string, column: string, comment: string, dataType: string): string {
		let query = `ALTER TABLE ${table} MODIFY COLUMN ${column} ${dataType} COMMENT '${comment}';\n`;

		return query;
	}

	displayResult(resultQry: string) {
		this.resultScreen.nativeElement.innerHTML = resultQry;
	}
}
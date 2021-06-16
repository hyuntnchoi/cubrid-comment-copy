import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
	private show: boolean = true;

	constructor() {}

	clickBtn1(): void {
		alert('컬럼 코멘트를 복사하는 기능입니다');
		this.changeManual();
	}
	
	clickBtn2(): void {
		alert('아직 지원하지 않는 기능입니다');
		this.changeManual();
	}

	changeManual(): void {
		this.show = !this.show;
		// let manuals = eleRef.nativeElement.querySelectorAll('.manual');
		// console.log(manuals);
		// if (manuals.style.display === "none") {
		// 	manuals.style.display = "block";
		// } else {
		// 	manuals.style.display = "none";
		// }
	} 

}

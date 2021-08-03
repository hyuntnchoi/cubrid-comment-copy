import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
	private valid: boolean = true;

	constructor() {}

	isValid(): boolean {
		return this.valid;
	}

	clickBtn1(): void {
		alert('컬럼 코멘트를 복사하는 기능입니다');
		this.changeBtnStatus();
	}
	
	clickBtn2(): void {
		alert('아직 지원하지 않는 기능입니다');
		this.changeBtnStatus();
	}

	changeBtnStatus(): void {
		this.valid = !this.valid;
	} 
}

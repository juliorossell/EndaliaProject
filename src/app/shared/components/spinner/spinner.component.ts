import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  type: string;
  background: string;
  opacity: string;
  constructor() {
    this.type = 'full';
    this.background = 'white';
    this.opacity = '1';
  }

  ngOnInit() {}

  public getClass() {
    return {
      [`${this.type}`]: true,
      [`${this.background}`]: true,
      [`${this.opacity}`]: true,
    };
  }
}

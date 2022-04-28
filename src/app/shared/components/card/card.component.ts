import { Component, Input, OnInit } from '@angular/core';
import { IUserInfo } from '../../interfaces/user-info';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() userInfo: IUserInfo = {
    email: '',
    job: '',
    password: '',
    lastName: '',
    name: '',
    phone: '',
    imagenPath: ''
  };
  constructor() { }

  ngOnInit() {
  }

}

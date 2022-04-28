import { Injectable } from '@angular/core';
import { IUserInfo } from '../interfaces/user-info';

@Injectable()
export class UserProfileService {

  constructor() {}

  setTokenInLocalStorage(body: IUserInfo) {
    localStorage.setItem('token', "$!asdasdasd$sasad");
    localStorage.setItem('email', body.email);
  }
}

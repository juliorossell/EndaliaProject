import { IUserInfo } from "./user-info";

export interface IAuthIdentity {
  token: string;
  userInfo: IUserInfo
}


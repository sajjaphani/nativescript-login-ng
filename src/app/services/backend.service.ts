import { Injectable } from "@angular/core";

import { getString, setString } from "application-settings";

import { User } from "./user.model";

const _CURRENT_USER = "_CURRENT_USER";

@Injectable()
export class BackendService {

  public isUserLoggedIn(): boolean {
    let loggedIn = !!this.user;

    return loggedIn;
  }

  public login(user: User) {
    let that = this;
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (user.email === user.password) {
          that.user = JSON.stringify(user)
          resolve();
        } else {
          reject({ message: 'Invalid Email/Password, For this example both should be same.' })
        }
      }, 1000)
    });
  }

  logout() {
    let that = this;
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        that.user = "";
        resolve();
      }, 1000)
    });
  }

  private get user(): string {
    return getString(_CURRENT_USER);
  }

  private set user(theToken: string) {
    setString(_CURRENT_USER, theToken);
  }
}
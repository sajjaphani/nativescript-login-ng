import { Injectable } from "@angular/core";

import { Kinvey } from 'kinvey-nativescript-sdk';

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
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (user.email === user.password) {
          resolve();
        } else {
          reject({ message: 'Invalid Email/Password, For this example both should be same' })
        }
      }, 1000)
    });
  }

  public loginWithKinvey(user: User): Promise<any> {
    let _user: Kinvey.User = Kinvey.User.getActiveUser();
    if (_user) {
      return _user.logout()
        .then(() => this.performLogin(user));
    } else {
      return this.performLogin(user);
    }
  }

  logout() {
    return Kinvey.User.logout().then(() => {
      this.user = "";
    });
  }

  private performLogin(user: User) {
    return Kinvey.User.login(user.email, user.password).then((_user: any) => {
      this.user = JSON.stringify(_user)
    });
  }

  private get user(): string {
    return getString(_CURRENT_USER);
  }

  private set user(theToken: string) {
    setString(_CURRENT_USER, theToken);
  }

  public forgetPassword(email: string) {
    return Kinvey.User.resetPassword(email)
      .then((data) => {
        console.debug('Data', data)
      })
      .catch((error: Kinvey.BaseError) => {
        console.debug('Error', error)
      });
  }
}
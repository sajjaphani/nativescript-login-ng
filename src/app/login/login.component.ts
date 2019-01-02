import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { TextField } from "ui/text-field/text-field";
import { Page } from "ui/page";
import { alert } from "ui/dialogs";

import { isAndroid, device } from "platform";
import * as app from "application";

import { BackendService } from "../services/backend.service";
import { UtilityService } from '../services/utility.service';
import { User } from "../services/user.model";

declare var android: any;

@Component({
  selector: "login",
  moduleId: module.id,
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

  @ViewChild('password') passwordField: ElementRef;
  @ViewChild('email') emailField: ElementRef;

  user: User;
  isAuthenticating = false;

  public hideIcon = String.fromCharCode(0xf070);
  public showIcon = String.fromCharCode(0xf06e);
  public showHideIcon: any;
  private showPassword = false;

  emailError = "";
  passError = "";
  loginError = "";

  emailHasFocus = false;
  passHasFocus = false;

  constructor(
    private backendService: BackendService,
    private utilityService: UtilityService,
    private page: Page,
    private routerExtensions: RouterExtensions,
  ) {
    this.user = new User();
    this.user.email = "";
    this.user.password = "";
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.cssClasses.add("login-page-background");
    this.page.backgroundSpanUnderStatusBar = true;
    this.showHideIcon = this.hideIcon;

    if (isAndroid && device.sdkVersion >= '21') {
      var View = android.view.View;
      var window = app.android.startActivity.getWindow();
      window.setStatusBarColor(0x000000);

      var decorView = window.getDecorView();
      decorView.setSystemUiVisibility(
        View.SYSTEM_UI_FLAG_LAYOUT_STABLE
        | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
    }
  }

  public hasEmailErrors() {
    const hasErrorMsg = !!this.emailError;
    if (!hasErrorMsg)
      return false;

    const isValidEmail = this.user.hasEmail() && this.utilityService.isValidEmail(this.user.email);
    let hasError = hasErrorMsg || !isValidEmail;

    if (isValidEmail) {
      this.emailError = ""
      return false;
    }

    return hasError;
  }

  public hasPasswordErrors() {
    const hasErrorMsg = !!this.passError;
    if (!hasErrorMsg)
      return false;

    const isValidPassword = this.user.password.length > 0;
    let hasError = hasErrorMsg || !isValidPassword;

    if (isValidPassword) {
      this.passError = ""
      return false;
    }

    return hasError;
  }

  getEmailError() {
    return this.emailError;
  }

  getPasswordError() {

    return this.passError;
  }

  onEmailFocus() {
    this.emailHasFocus = true;
  }

  onPasswordFocus() {
    this.passHasFocus = true;

    this.updateErrors(false);
  }

  updateErrors(checkPass) {
    if (this.user.hasEmail()) {
      if (this.utilityService.isValidEmail(this.user.email)) {
        this.emailError = "";
      } else {
        this.emailError = "Invalid Email"
      }
    } else {
      this.emailError = "Email cannot be blank"
    }

    if (checkPass) {
      let length = this.user.password.length;
      if (length == 0) {
        this.passError = "Password cannot be blank";
      } else {
        this.passError = "";
      }
    }
  }

  hasLoginErrors() {
    return !!this.loginError;
  }

  getLoginError() {
    return this.loginError;
  }

  private isValidForm() {
    let isValid = !!this.emailError || !!this.passError;
    return !isValid;
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
    this.showHideIcon = this.showPassword ? this.showIcon : this.hideIcon;
    let passField: TextField = this.passwordField.nativeElement;
    passField.secure = !passField.secure;
  }

  login() {
    this.updateErrors(true);

    if (this.isValidForm()) {
      this.isAuthenticating = true;
      // Use the backend service to login
      this.backendService.login(this.user)
        .then(() => {
          this.isAuthenticating = false;
          this.routerExtensions.navigate(["/home"], { clearHistory: true });
        }).catch(error => {
          this.isAuthenticating = false;
          this.loginError = error.message;
        });
    }
  }

  isSubmitEnabled() {
    return !this.isAuthenticating && this.utilityService.isValidEmail(this.user.email);
  }

  isTablet() {
    return this.utilityService.isTablet();
  }

  // You can configure your backend and present appropriate window for recovery.
  forgotPassword() {
    alert({
      title: "Forgot Password",
      message: "Configure your backend to add a forgot password. Check 'login-kinvey' branch to work with Kinvey backend.",
      okButtonText: "Close"
  }).then(function () {
      console.log("Dialog closed!");
  });
  }
}
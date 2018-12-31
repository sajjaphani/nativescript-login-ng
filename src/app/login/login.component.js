"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var platform_1 = require("platform");
var app = require("application");
var backend_service_1 = require("../services/backend.service");
var utility_service_1 = require("../services/utility.service");
var user_model_1 = require("../services/user.model");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(backendService, utilityService, page, routerExtensions) {
        this.backendService = backendService;
        this.utilityService = utilityService;
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.isAuthenticating = false;
        this.hideIcon = String.fromCharCode(0xf070);
        this.showIcon = String.fromCharCode(0xf06e);
        this.showPassword = false;
        this.emailError = "";
        this.passError = "";
        this.loginError = "";
        this.emailHasFocus = false;
        this.passHasFocus = false;
        this.user = new user_model_1.User();
        this.user.email = "";
        this.user.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.cssClasses.add("login-page-background");
        this.page.backgroundSpanUnderStatusBar = true;
        this.showHideIcon = this.hideIcon;
        if (platform_1.isAndroid && platform_1.device.sdkVersion >= '21') {
            var View = android.view.View;
            var window = app.android.startActivity.getWindow();
            window.setStatusBarColor(0x000000);
            var decorView = window.getDecorView();
            decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        }
    };
    LoginComponent.prototype.hasEmailErrors = function () {
        var hasErrorMsg = !!this.emailError;
        if (!hasErrorMsg)
            return false;
        var isValidEmail = this.user.hasEmail() && this.utilityService.isValidEmail(this.user.email);
        var hasError = hasErrorMsg || !isValidEmail;
        if (isValidEmail) {
            this.emailError = "";
            return false;
        }
        return hasError;
    };
    LoginComponent.prototype.hasPasswordErrors = function () {
        var hasErrorMsg = !!this.passError;
        if (!hasErrorMsg)
            return false;
        var isValidPassword = this.user.password.length > 0;
        var hasError = hasErrorMsg || !isValidPassword;
        if (isValidPassword) {
            this.passError = "";
            return false;
        }
        return hasError;
    };
    LoginComponent.prototype.getEmailError = function () {
        return this.emailError;
    };
    LoginComponent.prototype.getPasswordError = function () {
        return this.passError;
    };
    LoginComponent.prototype.onEmailFocus = function () {
        this.emailHasFocus = true;
    };
    LoginComponent.prototype.onPasswordFocus = function () {
        this.passHasFocus = true;
        this.updateErrors(false);
    };
    LoginComponent.prototype.updateErrors = function (checkPass) {
        if (this.user.hasEmail()) {
            if (this.utilityService.isValidEmail(this.user.email)) {
                this.emailError = "";
            }
            else {
                this.emailError = "Invalid Email";
            }
        }
        else {
            this.emailError = "Email cannot be blank";
        }
        if (checkPass) {
            var length_1 = this.user.password.length;
            if (length_1 == 0) {
                this.passError = "Password cannot be blank";
            }
            else {
                this.passError = "";
            }
        }
    };
    LoginComponent.prototype.hasLoginErrors = function () {
        return !!this.loginError;
    };
    LoginComponent.prototype.getLoginError = function () {
        return this.loginError;
    };
    LoginComponent.prototype.isValidForm = function () {
        var isValid = !!this.emailError || !!this.passError;
        return !isValid;
    };
    LoginComponent.prototype.showHidePassword = function () {
        this.showPassword = !this.showPassword;
        this.showHideIcon = this.showPassword ? this.showIcon : this.hideIcon;
        var passField = this.passwordField.nativeElement;
        passField.secure = !passField.secure;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.updateErrors(true);
        if (this.isValidForm()) {
            this.isAuthenticating = true;
            // Use the backend service to login
            this.backendService.loginWithKinvey(this.user)
                .then(function () {
                _this.isAuthenticating = false;
                _this.routerExtensions.navigate(["/home"], { clearHistory: true });
            }).catch(function (error) {
                _this.isAuthenticating = false;
                _this.loginError = error.message;
            });
        }
    };
    LoginComponent.prototype.isSubmitEnabled = function () {
        return !this.isAuthenticating && this.utilityService.isValidEmail(this.user.email);
    };
    LoginComponent.prototype.isTablet = function () {
        return this.utilityService.isTablet();
    };
    __decorate([
        core_1.ViewChild('password'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "passwordField", void 0);
    __decorate([
        core_1.ViewChild('email'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "emailField", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            moduleId: module.id,
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [backend_service_1.BackendService,
            utility_service_1.UtilityService,
            page_1.Page,
            router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHNEQUErRDtBQUcvRCxnQ0FBK0I7QUFFL0IscUNBQTZDO0FBQzdDLGlDQUFtQztBQUVuQywrREFBNkQ7QUFDN0QsK0RBQTZEO0FBQzdELHFEQUE4QztBQVM5QztJQW9CRSx3QkFDVSxjQUE4QixFQUM5QixjQUE4QixFQUM5QixJQUFVLEVBQ1YsZ0JBQWtDO1FBSGxDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFsQjVDLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUVsQixhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0QyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUU3QixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBUW5CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJ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T0F4QmpDLGNBQWMsQ0F1SzFCO0lBQUQscUJBQUM7Q0FBQSxBQXZLRCxJQXVLQztBQXZLWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGQvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbmltcG9ydCB7IGlzQW5kcm9pZCwgZGV2aWNlIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91dGlsaXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLm1vZGVsXCI7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxvZ2luXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZCgncGFzc3dvcmQnKSBwYXNzd29yZEZpZWxkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdlbWFpbCcpIGVtYWlsRmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgdXNlcjogVXNlcjtcbiAgaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuXG4gIHB1YmxpYyBoaWRlSWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDcwKTtcbiAgcHVibGljIHNob3dJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNmUpO1xuICBwdWJsaWMgc2hvd0hpZGVJY29uOiBhbnk7XG4gIHByaXZhdGUgc2hvd1Bhc3N3b3JkID0gZmFsc2U7XG5cbiAgZW1haWxFcnJvciA9IFwiXCI7XG4gIHBhc3NFcnJvciA9IFwiXCI7XG4gIGxvZ2luRXJyb3IgPSBcIlwiO1xuXG4gIGVtYWlsSGFzRm9jdXMgPSBmYWxzZTtcbiAgcGFzc0hhc0ZvY3VzID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgKSB7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICB0aGlzLnVzZXIuZW1haWwgPSBcIlwiO1xuICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiXCI7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLnBhZ2UuY3NzQ2xhc3Nlcy5hZGQoXCJsb2dpbi1wYWdlLWJhY2tncm91bmRcIik7XG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuICAgIHRoaXMuc2hvd0hpZGVJY29uID0gdGhpcy5oaWRlSWNvbjtcblxuICAgIGlmIChpc0FuZHJvaWQgJiYgZGV2aWNlLnNka1ZlcnNpb24gPj0gJzIxJykge1xuICAgICAgdmFyIFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcbiAgICAgIHZhciB3aW5kb3cgPSBhcHAuYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgd2luZG93LnNldFN0YXR1c0JhckNvbG9yKDB4MDAwMDAwKTtcblxuICAgICAgdmFyIGRlY29yVmlldyA9IHdpbmRvdy5nZXREZWNvclZpZXcoKTtcbiAgICAgIGRlY29yVmlldy5zZXRTeXN0ZW1VaVZpc2liaWxpdHkoXG4gICAgICAgIFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxuICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0ZVTExTQ1JFRU5cbiAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0lNTUVSU0lWRV9TVElDS1kpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNFbWFpbEVycm9ycygpIHtcbiAgICBjb25zdCBoYXNFcnJvck1zZyA9ICEhdGhpcy5lbWFpbEVycm9yO1xuICAgIGlmICghaGFzRXJyb3JNc2cpXG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBpc1ZhbGlkRW1haWwgPSB0aGlzLnVzZXIuaGFzRW1haWwoKSAmJiB0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpO1xuICAgIGxldCBoYXNFcnJvciA9IGhhc0Vycm9yTXNnIHx8ICFpc1ZhbGlkRW1haWw7XG5cbiAgICBpZiAoaXNWYWxpZEVtYWlsKSB7XG4gICAgICB0aGlzLmVtYWlsRXJyb3IgPSBcIlwiXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc0Vycm9yO1xuICB9XG5cbiAgcHVibGljIGhhc1Bhc3N3b3JkRXJyb3JzKCkge1xuICAgIGNvbnN0IGhhc0Vycm9yTXNnID0gISF0aGlzLnBhc3NFcnJvcjtcbiAgICBpZiAoIWhhc0Vycm9yTXNnKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgaXNWYWxpZFBhc3N3b3JkID0gdGhpcy51c2VyLnBhc3N3b3JkLmxlbmd0aCA+IDA7XG4gICAgbGV0IGhhc0Vycm9yID0gaGFzRXJyb3JNc2cgfHwgIWlzVmFsaWRQYXNzd29yZDtcblxuICAgIGlmIChpc1ZhbGlkUGFzc3dvcmQpIHtcbiAgICAgIHRoaXMucGFzc0Vycm9yID0gXCJcIlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBoYXNFcnJvcjtcbiAgfVxuXG4gIGdldEVtYWlsRXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1haWxFcnJvcjtcbiAgfVxuXG4gIGdldFBhc3N3b3JkRXJyb3IoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5wYXNzRXJyb3I7XG4gIH1cblxuICBvbkVtYWlsRm9jdXMoKSB7XG4gICAgdGhpcy5lbWFpbEhhc0ZvY3VzID0gdHJ1ZTtcbiAgfVxuXG4gIG9uUGFzc3dvcmRGb2N1cygpIHtcbiAgICB0aGlzLnBhc3NIYXNGb2N1cyA9IHRydWU7XG5cbiAgICB0aGlzLnVwZGF0ZUVycm9ycyhmYWxzZSk7XG4gIH1cblxuICB1cGRhdGVFcnJvcnMoY2hlY2tQYXNzKSB7XG4gICAgaWYgKHRoaXMudXNlci5oYXNFbWFpbCgpKSB7XG4gICAgICBpZiAodGhpcy51dGlsaXR5U2VydmljZS5pc1ZhbGlkRW1haWwodGhpcy51c2VyLmVtYWlsKSkge1xuICAgICAgICB0aGlzLmVtYWlsRXJyb3IgPSBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbWFpbEVycm9yID0gXCJJbnZhbGlkIEVtYWlsXCJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWFpbEVycm9yID0gXCJFbWFpbCBjYW5ub3QgYmUgYmxhbmtcIlxuICAgIH1cblxuICAgIGlmIChjaGVja1Bhc3MpIHtcbiAgICAgIGxldCBsZW5ndGggPSB0aGlzLnVzZXIucGFzc3dvcmQubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHRoaXMucGFzc0Vycm9yID0gXCJQYXNzd29yZCBjYW5ub3QgYmUgYmxhbmtcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFzc0Vycm9yID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYXNMb2dpbkVycm9ycygpIHtcbiAgICByZXR1cm4gISF0aGlzLmxvZ2luRXJyb3I7XG4gIH1cblxuICBnZXRMb2dpbkVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ2luRXJyb3I7XG4gIH1cblxuICBwcml2YXRlIGlzVmFsaWRGb3JtKCkge1xuICAgIGxldCBpc1ZhbGlkID0gISF0aGlzLmVtYWlsRXJyb3IgfHwgISF0aGlzLnBhc3NFcnJvcjtcbiAgICByZXR1cm4gIWlzVmFsaWQ7XG4gIH1cblxuICBzaG93SGlkZVBhc3N3b3JkKCkge1xuICAgIHRoaXMuc2hvd1Bhc3N3b3JkID0gIXRoaXMuc2hvd1Bhc3N3b3JkO1xuICAgIHRoaXMuc2hvd0hpZGVJY29uID0gdGhpcy5zaG93UGFzc3dvcmQgPyB0aGlzLnNob3dJY29uIDogdGhpcy5oaWRlSWNvbjtcbiAgICBsZXQgcGFzc0ZpZWxkOiBUZXh0RmllbGQgPSB0aGlzLnBhc3N3b3JkRmllbGQubmF0aXZlRWxlbWVudDtcbiAgICBwYXNzRmllbGQuc2VjdXJlID0gIXBhc3NGaWVsZC5zZWN1cmU7XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICB0aGlzLnVwZGF0ZUVycm9ycyh0cnVlKTtcblxuICAgIGlmICh0aGlzLmlzVmFsaWRGb3JtKCkpIHtcbiAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IHRydWU7XG4gICAgICAvLyBVc2UgdGhlIGJhY2tlbmQgc2VydmljZSB0byBsb2dpblxuICAgICAgdGhpcy5iYWNrZW5kU2VydmljZS5sb2dpbldpdGhLaW52ZXkodGhpcy51c2VyKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubG9naW5FcnJvciA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlzU3VibWl0RW5hYmxlZCgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNBdXRoZW50aWNhdGluZyAmJiB0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpO1xuICB9XG5cbiAgaXNUYWJsZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMudXRpbGl0eVNlcnZpY2UuaXNUYWJsZXQoKTtcbiAgfVxufSJdfQ==
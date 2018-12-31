"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var application_settings_1 = require("application-settings");
var _CURRENT_USER = "_CURRENT_USER";
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.prototype.isUserLoggedIn = function () {
        var loggedIn = !!this.user;
        return loggedIn;
    };
    BackendService.prototype.login = function (user) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (user.email === user.password) {
                    resolve();
                }
                else {
                    reject({ message: 'Invalid Email/Password, For this example both should be same' });
                }
            }, 1000);
        });
    };
    BackendService.prototype.loginWithKinvey = function (user) {
        var _this = this;
        var _user = kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser();
        if (_user) {
            return _user.logout()
                .then(function () { return _this.performLogin(user); });
        }
        else {
            return this.performLogin(user);
        }
    };
    BackendService.prototype.logout = function () {
        var _this = this;
        return kinvey_nativescript_sdk_1.Kinvey.User.logout().then(function () {
            _this.user = "";
        });
    };
    BackendService.prototype.performLogin = function (user) {
        var _this = this;
        return kinvey_nativescript_sdk_1.Kinvey.User.login(user.email, user.password).then(function (_user) {
            _this.user = JSON.stringify(_user);
        });
    };
    Object.defineProperty(BackendService.prototype, "user", {
        get: function () {
            return application_settings_1.getString(_CURRENT_USER);
        },
        set: function (theToken) {
            application_settings_1.setString(_CURRENT_USER, theToken);
        },
        enumerable: true,
        configurable: true
    });
    BackendService = __decorate([
        core_1.Injectable()
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLG1FQUFpRDtBQUVqRCw2REFBNEQ7QUFJNUQsSUFBTSxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBR3RDO0lBQUE7SUFpREEsQ0FBQztJQS9DUSx1Q0FBYyxHQUFyQjtRQUNFLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTNCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFTSw4QkFBSyxHQUFaLFVBQWEsSUFBVTtRQUNyQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsVUFBVSxDQUFDO2dCQUNULElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNoQyxPQUFPLEVBQUUsQ0FBQztpQkFDWDtxQkFBTTtvQkFDTCxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsOERBQThELEVBQUUsQ0FBQyxDQUFBO2lCQUNwRjtZQUNILENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHdDQUFlLEdBQXRCLFVBQXVCLElBQVU7UUFBakMsaUJBUUM7UUFQQyxJQUFJLEtBQUssR0FBZ0IsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckQsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUU7aUJBQ2xCLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQUlDO1FBSEMsT0FBTyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDL0IsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8scUNBQVksR0FBcEIsVUFBcUIsSUFBVTtRQUEvQixpQkFJQztRQUhDLE9BQU8sZ0NBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQVU7WUFDbEUsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFZLGdDQUFJO2FBQWhCO1lBQ0UsT0FBTyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUFpQixRQUFnQjtZQUMvQixnQ0FBUyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FKQTtJQTVDVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7T0FDQSxjQUFjLENBaUQxQjtJQUFELHFCQUFDO0NBQUEsQUFqREQsSUFpREM7QUFqRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSAna2ludmV5LW5hdGl2ZXNjcmlwdC1zZGsnO1xuXG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xuXG5jb25zdCBfQ1VSUkVOVF9VU0VSID0gXCJfQ1VSUkVOVF9VU0VSXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG5cbiAgcHVibGljIGlzVXNlckxvZ2dlZEluKCk6IGJvb2xlYW4ge1xuICAgIGxldCBsb2dnZWRJbiA9ICEhdGhpcy51c2VyO1xuXG4gICAgcmV0dXJuIGxvZ2dlZEluO1xuICB9XG5cbiAgcHVibGljIGxvZ2luKHVzZXI6IFVzZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh1c2VyLmVtYWlsID09PSB1c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCh7IG1lc3NhZ2U6ICdJbnZhbGlkIEVtYWlsL1Bhc3N3b3JkLCBGb3IgdGhpcyBleGFtcGxlIGJvdGggc2hvdWxkIGJlIHNhbWUnIH0pXG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbG9naW5XaXRoS2ludmV5KHVzZXI6IFVzZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCBfdXNlcjogS2ludmV5LlVzZXIgPSBLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCk7XG4gICAgaWYgKF91c2VyKSB7XG4gICAgICByZXR1cm4gX3VzZXIubG9nb3V0KClcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5wZXJmb3JtTG9naW4odXNlcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wZXJmb3JtTG9naW4odXNlcik7XG4gICAgfVxuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHJldHVybiBLaW52ZXkuVXNlci5sb2dvdXQoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMudXNlciA9IFwiXCI7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHBlcmZvcm1Mb2dpbih1c2VyOiBVc2VyKSB7XG4gICAgcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ2luKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpLnRoZW4oKF91c2VyOiBhbnkpID0+IHtcbiAgICAgIHRoaXMudXNlciA9IEpTT04uc3RyaW5naWZ5KF91c2VyKVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgdXNlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRTdHJpbmcoX0NVUlJFTlRfVVNFUik7XG4gIH1cblxuICBwcml2YXRlIHNldCB1c2VyKHRoZVRva2VuOiBzdHJpbmcpIHtcbiAgICBzZXRTdHJpbmcoX0NVUlJFTlRfVVNFUiwgdGhlVG9rZW4pO1xuICB9XG59Il19
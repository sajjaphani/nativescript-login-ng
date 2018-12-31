"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var enums_1 = require("ui/enums");
var platform_1 = require("platform");
// From https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression/201378#201378
var regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.prototype.isValidEmail = function (email) {
        if (!email)
            return false;
        return regex.test(email);
    };
    UtilityService.prototype.isTablet = function () {
        return platform_1.device.deviceType === enums_1.DeviceType.Tablet;
    };
    UtilityService = __decorate([
        core_1.Injectable()
    ], UtilityService);
    return UtilityService;
}());
exports.UtilityService = UtilityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXRpbGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLGtDQUFzQztBQUN0QyxxQ0FBa0M7QUFFbEMsNEhBQTRIO0FBQzVILElBQU0sS0FBSyxHQUFPLGdjQUFnYyxDQUFBO0FBR2xkO0lBQUE7SUFZQSxDQUFDO0lBVlUscUNBQVksR0FBbkIsVUFBb0IsS0FBYTtRQUM3QixJQUFHLENBQUMsS0FBSztZQUNMLE9BQU8sS0FBSyxDQUFDO1FBRWpCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0saUNBQVEsR0FBZjtRQUNJLE9BQU8saUJBQU0sQ0FBQyxVQUFVLEtBQUssa0JBQVUsQ0FBQyxNQUFNLENBQUM7SUFDbkQsQ0FBQztJQVhRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtPQUNBLGNBQWMsQ0FZMUI7SUFBRCxxQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IERldmljZVR5cGUgfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuXG4vLyBGcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwMTMyMy9ob3ctdG8tdmFsaWRhdGUtYW4tZW1haWwtYWRkcmVzcy11c2luZy1hLXJlZ3VsYXItZXhwcmVzc2lvbi8yMDEzNzgjMjAxMzc4XG5jb25zdCByZWdleDphbnkgPSAvKD86W2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKnxcIig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKlwiKUAoPzooPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/fFxcWyg/Oig/OigyKDVbMC01XXxbMC00XVswLTldKXwxWzAtOV1bMC05XXxbMS05XT9bMC05XSkpXFwuKXszfSg/OigyKDVbMC01XXxbMC00XVswLTldKXwxWzAtOV1bMC05XXxbMS05XT9bMC05XSl8W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKS9cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFV0aWxpdHlTZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBpc1ZhbGlkRW1haWwoZW1haWw6IFN0cmluZykge1xuICAgICAgICBpZighZW1haWwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KGVtYWlsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNUYWJsZXQoKSB7XG4gICAgICAgIHJldHVybiBkZXZpY2UuZGV2aWNlVHlwZSA9PT0gRGV2aWNlVHlwZS5UYWJsZXQ7XG4gICAgfVxufSJdfQ==
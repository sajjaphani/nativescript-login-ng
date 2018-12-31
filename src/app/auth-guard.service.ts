import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { BackendService } from "./services/backend.service";
import { RouterExtensions } from "nativescript-angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private backendService: BackendService, private routerExtensions: RouterExtensions) { }

    canActivate() {
        if (this.backendService.isUserLoggedIn()) {
            return true;
        } else {
            this.routerExtensions.navigate(["/login"]);
            
            return false;
        }
    }
}
import { Component, OnInit } from "@angular/core";
import { BackendService } from "../services/backend.service";
import { RouterExtensions } from "nativescript-angular/router";
import { UtilityService } from "../services/utility.service";

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {

    isLoading = false;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private backendService: BackendService, private routerExtension: RouterExtensions,
        private utilityService: UtilityService) { }

    ngOnInit(): void {
    }

    logout() {
        this.isLoading = true;
        this.backendService.logout()
            .then(() => {
                this.routerExtension.navigate(['/login']);
                this.isLoading = false;
            });
    }

    isTablet() {
        return this.utilityService.isTablet();
    }
}
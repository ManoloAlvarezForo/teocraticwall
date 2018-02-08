import { Component, OnInit } from "@angular/core";
import { Congregation } from "./congregation";
import { CongregationService } from "./congregation.service";

@Component({
    selector: "ns-preaching",
    moduleId: module.id,
    templateUrl: "./preachings.component.html",
    styleUrls: ["./preachings.component.css"]
})
export class PreachingsComponent implements OnInit {
    preachingTitle = 'Congregaciones';
    congregations: Congregation[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private preachingService: CongregationService) { }

    ngOnInit(): void {
        this.congregations = this.preachingService.getCongregations();
    }
}
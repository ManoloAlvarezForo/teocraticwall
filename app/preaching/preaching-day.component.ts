import { Component, OnInit } from "@angular/core";
import { PreachingDay } from "./preaching-day";
import { PreachingsService } from "./preachings.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: "ns-preachingDay",
    moduleId: module.id,
    templateUrl: "./preaching-day.component.html",
})
export class PreachingDayComponent implements OnInit {
    preachingDay: any;

    constructor(
        private preachingService: PreachingsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.preachingDay = this.preachingService.getPreachingDay(id);
    }
}
import { Component, OnInit } from "@angular/core";
import { Preaching } from "./preaching";
import { PreachingsService } from "./preachings.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: "ns-preaching",
    moduleId: module.id,
    templateUrl: "./preaching-detail.component.html",
})
export class PreachingDetailComponent implements OnInit {
    preaching: Preaching;

    constructor(
        private preachingService: PreachingsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.preaching = this.preachingService.getPreaching(id);
    }
}
import { Component, OnInit } from "@angular/core";
import { Option } from "./option";
import { OptionService } from "./option.service";

@Component({
    selector: "ns-options",
    moduleId: module.id,
    templateUrl: "./options.component.html",
})
export class OptionsComponent implements OnInit {
    options: Option[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private optionService: OptionService) { }

    ngOnInit(): void {
        this.options = this.optionService.getOptions();
    }
}
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { OptionService } from "./main/option.service";
import { OptionsComponent } from "./main/options.component";
import { PreachingsComponent } from "./preaching/preachings.component";
import { PreachingsService } from "./preaching/preachings.service";
import { PreachingDetailComponent } from "./preaching/preching-detail.component";
import { PreachingDayComponent } from "./preaching/preaching-day.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        OptionsComponent,
        PreachingsComponent,
        PreachingDetailComponent,
        PreachingDayComponent
    ],
    providers: [
        OptionService,
        PreachingsService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }

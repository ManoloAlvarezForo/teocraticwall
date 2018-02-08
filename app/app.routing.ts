import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { OptionsComponent } from "./main/options.component";
import { PreachingsComponent } from "./preaching/preachings.component";
import { PreachingDetailComponent } from "./preaching/preching-detail.component";
import { PreachingDayComponent } from "./preaching/preaching-day.component";

const routes: Routes = [
    { path: "", redirectTo: "/options", pathMatch: "full" },
    { path: "options", component: OptionsComponent },
    { path: "preachings", component: PreachingsComponent},
    { path: "preaching/:id", component: PreachingDetailComponent},
    { path: "preachingDay/:id", component: PreachingDayComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
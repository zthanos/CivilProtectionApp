import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from '@nativescript/angular/http-client';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";
import { FeedsComponent } from "./feeds/feeds.component";
import { EmergencyComponent } from "./emergency/emergency.component"


import { DataService } from "./data/data";
import { FeedsService } from "./services/feeds.service"

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        DetailComponent,
        FeedsComponent,
        EmergencyComponent
    ],
    providers: [
        DataService,
        FeedsService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APPRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import { Error404Module } from './error404/error404.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
   
  ],
  imports: [
    BrowserModule,
    APPRoutingModule,
    PaisModule,
    SharedModule,
    Error404Module,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

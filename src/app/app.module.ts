import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import { APPRoutingModule } from './app-routing.module';
import { Error404Module } from './error404/error404.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    APPRoutingModule,
    PaisModule,
    SharedModule,
    Error404Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

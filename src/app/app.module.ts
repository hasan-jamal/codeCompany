import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';

@NgModule({
    declarations: [],

  imports: [
    BrowserAnimationsModule,
    HttpClientModule, 
    BrowserModule,
    AppRoutingModule
  ],
      providers: [],
    bootstrap: []
})
export class AppModule {}

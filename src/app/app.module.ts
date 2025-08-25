import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [],

  imports: [
   BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule 
   ],
    providers: [],
})
export class AppModule {}

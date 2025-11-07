import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicePageComponent } from './component/service-page/service-page.component';
import { SubServiceComponent } from './sub-service/component/sub-service/sub-service.component';


@NgModule({
  declarations: [
    ServicePageComponent,
    SubServiceComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }

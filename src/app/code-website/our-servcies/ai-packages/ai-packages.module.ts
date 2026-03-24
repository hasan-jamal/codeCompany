import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiPackagesRoutingModule } from './ai-packages-routing.module';
import { AiSmartSecurityComponent } from './ai-smart-security/component/ai-smart-security/ai-smart-security.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { AiSmartFacilityComponent } from './ai-smart-facility/component/ai-smart-facility/ai-smart-facility.component';
import { AiSmartCityComponent } from './ai-smart-city/component/ai-smart-city/ai-smart-city.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SmartHybridTheatersComponent } from './smart-hybrid-theaters/component/smart-hybrid-theaters/smart-hybrid-theaters.component';


@NgModule({
  declarations: [
    AiSmartSecurityComponent,
    AiSmartFacilityComponent,
    AiSmartCityComponent,
    SmartHybridTheatersComponent
  ],
  imports: [
    CommonModule,
    AiPackagesRoutingModule,
    TranslateModule,
    RouterLink,
    SlickCarouselModule
  ]
})
export class AiPackagesModule { }

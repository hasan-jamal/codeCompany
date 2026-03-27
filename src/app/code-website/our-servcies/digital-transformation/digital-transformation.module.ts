import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalTransformationRoutingModule } from './digital-transformation-routing.module';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DgaConsultingServicesComponent } from './dga-consulting-services/component/dga-consulting-services/dga-consulting-services.component';
import { InnovationHubComponent } from './innovation-hub/component/innovation-hub/innovation-hub.component';
import { EaServicesComponent } from './ea-services/component/ea-services/ea-services.component';
import { NdmoServicesComponent } from './ndmo-services/component/ndmo-services/ndmo-services.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    InnovationHubComponent,
    DgaConsultingServicesComponent,
    EaServicesComponent,
    NdmoServicesComponent
  ],
  imports: [
    CommonModule,
    DigitalTransformationRoutingModule,
    RouterLink,
    TranslateModule,
    SlickCarouselModule
  ]
})
export class DigitalTransformationModule { }

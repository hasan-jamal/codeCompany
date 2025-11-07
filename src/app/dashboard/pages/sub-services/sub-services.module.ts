import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubServicesRoutingModule } from './sub-services-routing.module';
import { TableSubServicesComponent } from './table/component/table-sub-services/table-sub-services.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { CreateSubServiceComponent } from './create/component/create-sub-service/create-sub-service.component';
import { TableSectionsComponent } from './subService-sections/table/component/table/table.component';
import { UpdateServiceSectionComponent } from './subService-sections/update/component/update/update.component';


@NgModule({
  declarations: [
    TableSubServicesComponent,
    CreateSubServiceComponent,
      TableSectionsComponent,
      UpdateServiceSectionComponent
  ],
  imports: [
    CommonModule,
    SubServicesRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterLink,
    QuillModule.forRoot(),
  ]
})
export class SubServicesModule { }

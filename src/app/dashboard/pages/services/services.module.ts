import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { UpdateServiceComponent } from './update/component/update-service/update-service.component';
import { CreateServiceComponent } from './create/component/create-service/create-service.component';
import { TableComponent } from './table/component/table/table.component';
import { TableSectionsComponent } from './service-sections/table/component/table/table.component';
import { UpdateServiceSectionComponent } from './service-sections/update/component/update/update.component';


@NgModule({
  declarations: [
      UpdateServiceComponent,
      CreateServiceComponent,
      TableComponent,
      TableSectionsComponent,
      UpdateServiceSectionComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterLink,
    QuillModule.forRoot(),
  ]
})
export class ServicesModule { }

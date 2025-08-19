import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { UpdateComponent } from './update/component/update/update.component';
import { CreateComponent } from './create/component/create/create.component';
import { TableComponent } from './table/component/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    UpdateComponent,
    CreateComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NgxPaginationModule
  ]
})
export class NewsModule { }

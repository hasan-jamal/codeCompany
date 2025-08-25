import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { UpdateComponent } from './update/component/update/update.component';
import { CreateComponent } from './create/component/create/create.component';
import { TableComponent } from './table/component/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    UpdateComponent,
    CreateComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterLink,
    QuillModule.forRoot(),
    ]
})
export class NewsModule { }

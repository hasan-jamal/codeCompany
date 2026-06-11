import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightsRoutingModule } from './insights-routing.module';
import { UpdateInsightComponent } from './update/component/update-insight/update-insight.component';
import { InsightsTableComponent } from './table/component/table-insight/table-insight.component';
import { InsightComponent } from './component/insight/insight.component';
import { QuillModule } from 'ngx-quill';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateInsightComponent } from './create/component/create-insight/create-insight.component';


@NgModule({
  declarations: [
    UpdateInsightComponent,
    InsightComponent,
    InsightsTableComponent,
    CreateInsightComponent
   ],
  imports: [
    CommonModule,
    InsightsRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterLink,
    QuillModule.forRoot(),
  ]
})
export class InsightsModule { }

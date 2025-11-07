import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TableComponent } from './table/component/table/table.component';
import { GenderTextPipe } from '../../../shared/pipes/gender-text.pipe';
import { LocationTextPipe } from '../../../shared/pipes/location-text.pipe';
import { UpdateProfileComponent } from './update/component/update/update.component';


@NgModule({
  declarations: [
    TableComponent,
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterLink,
    GenderTextPipe, 
    LocationTextPipe 
  ]
})
export class UsersModule { }

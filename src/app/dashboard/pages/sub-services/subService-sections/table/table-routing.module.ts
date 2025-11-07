import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableSectionsComponent } from './component/table/table.component';

const routes: Routes = [
  { path: '', component: TableSectionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }

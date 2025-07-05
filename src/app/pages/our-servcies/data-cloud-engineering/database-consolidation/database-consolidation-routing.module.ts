import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseConsolidationComponent } from './component/database-consolidation/database-consolidation.component';

const routes: Routes = [
  {
    path: '',
    component:DatabaseConsolidationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseConsolidationRoutingModule { }

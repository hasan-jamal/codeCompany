import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataCloudEngineeringComponent } from './component/data-cloud-engineering/data-cloud-engineering.component';

const routes: Routes = [
  {
    path: '',
    component: DataCloudEngineeringComponent
  },
  {
    path: 'dataEngineering',
    loadChildren: () =>
      import('./data-engineering/data-engineering.module').then(m => m.DataEngineeringModule)
  },
  {
    path: 'databaseConsolidation',
    loadChildren: () =>
      import('./database-consolidation/database-consolidation.module').then(m => m.DatabaseConsolidationModule)
  },
  {
    path: 'disasterRecoverySolutions',
    loadChildren: () =>
      import('./disaster-recovery-solutions/disaster-recovery-solutions.module').then(m => m.DisasterRecoverySolutionsModule)
  },
  {
    path: 'ItServiceManagement',
    loadChildren: () =>
      import('./it-service-management/it-service-management.module').then(m => m.ItServiceManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCloudEngineeringRoutingModule { }

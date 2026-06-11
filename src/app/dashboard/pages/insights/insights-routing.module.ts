import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightComponent } from './component/insight/insight.component';

const routes: Routes = [
  {
    path: '',
    component: InsightComponent,

    children: [
      {
        path: 'table',
       data: { title: 'Dashboard', subtitle: 'Insights Page' },
        loadChildren: () =>
          import('./table/table.module').then(m => m.TableModule)
      },
      {
        path: 'create',
        data: { title: 'Insights', subtitle: 'Create Insight' },
        loadChildren: () =>
          import('./create/create.module').then(m => m.CreateModule)
      },
      {
        path: 'update/:id',
        data: { title: 'Insights', subtitle: 'Update Insight' },
        loadChildren: () =>
          import('./update/update.module').then(m => m.UpdateModule)
      },
      {
        path: '',
        redirectTo: 'table',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightsRoutingModule { }

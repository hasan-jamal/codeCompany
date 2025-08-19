import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/component/table/table.component';
import { NewsComponent } from './component/news.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: 'table',
        loadChildren: () =>
          import('./table/table.module').then(m => m.TableModule)
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./create/create.module').then(m => m.CreateModule)
      },
      {
        path: 'update',
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
export class NewsRoutingModule { }

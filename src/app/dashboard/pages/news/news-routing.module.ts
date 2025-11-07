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
       data: { title: 'Dashboard', subtitle: 'News Page' },
        loadChildren: () =>
          import('./table/table.module').then(m => m.TableModule)
      },
      {
        path: 'create',
        data: { title: 'News', subtitle: 'Create News' },
        loadChildren: () =>
          import('./create/create.module').then(m => m.CreateModule)
      },
      {
        path: 'update/:id',
        data: { title: 'News', subtitle: 'Update News' },
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

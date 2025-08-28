import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './component/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
      path: 'table',
      data: { title: 'Dashboard', subtitle: 'Users Page' },
        loadChildren: () =>
          import('./table/table.module').then(m => m.TableModule)
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
export class UsersRoutingModule { }

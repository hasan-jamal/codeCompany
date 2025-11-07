import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './component/services/services.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,

    children: [
      {
        path: 'table',
       data: { title: 'Dashboard', subtitle: 'Services Page' },
        loadChildren: () =>
          import('./table/table.module').then(m => m.TableModule)
      },
      {
        path: 'create',
        data: { title: 'Services', subtitle: 'Create Service' },
        loadChildren: () =>
          import('./create/create.module').then(m => m.CreateModule)
      },
      {
        path: 'update/:id',
        data: { title: 'Services', subtitle: 'Update Service' },
        loadChildren: () =>
          import('./update/update.module').then(m => m.UpdateModule)
      },
      {
        path: 'tableSections/:id',
        data: { title: 'Services', subtitle: 'Table Service Sections' },
        loadChildren: () =>
          import('./service-sections/table/table.module').then(m => m.TableModule)
      },
      {
        path: 'updateSections/:id',
        data: { title: 'Services', subtitle: 'Update Service Sections' },
        loadChildren: () =>
          import('./service-sections/update/update.module').then(m => m.UpdateModule)
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
export class ServicesRoutingModule { }

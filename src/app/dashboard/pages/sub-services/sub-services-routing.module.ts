import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubServicesComponent } from './component/sub-services/sub-services.component';

const routes: Routes = [
  {
    path: '',
    component: SubServicesComponent,

    children: [
      {
        path: 'table',
       data: { title: 'Dashboard', subtitle: 'Sub Service Page' },
        loadChildren: () =>
          import('./table/table.module').then(m => m.TableModule)
      },
      {
        path: 'create',
        data: { title: 'Sub Service', subtitle: 'Create Sub Service' },
        loadChildren: () =>
          import('./create/create.module').then(m => m.CreateModule)
      },
      {
        path: 'update/:id',
        data: { title: 'Sub Service', subtitle: 'Update Sub Service' },
        loadChildren: () =>
          import('./update/update.module').then(m => m.UpdateModule)
      },
      {
        path: 'tableSections/:id',
        data: { title: 'Sub Services', subtitle: 'Table Sub Service Sections' },
        loadChildren: () =>
          import('./subService-sections/table/table.module').then(m => m.TableModule)
      },
      {
        path: 'updateSections/:id',
        data: { title: 'SubServices', subtitle: 'Update Sub Service Sections' },
        loadChildren: () =>
          import('./subService-sections/update/update.module').then(m => m.UpdateModule)
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
export class SubServicesRoutingModule { }

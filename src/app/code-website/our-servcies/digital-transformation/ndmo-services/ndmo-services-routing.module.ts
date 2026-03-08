import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NdmoServicesComponent } from './component/ndmo-services/ndmo-services.component';

const routes: Routes = [
    {
      path: '',
      component:NdmoServicesComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NdmoServicesRoutingModule { }

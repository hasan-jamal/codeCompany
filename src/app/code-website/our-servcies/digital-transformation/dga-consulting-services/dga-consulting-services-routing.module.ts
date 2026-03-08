import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DgaConsultingServicesComponent } from './component/dga-consulting-services/dga-consulting-services.component';

const routes: Routes = [
    {
      path: '',
      component:DgaConsultingServicesComponent
    },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DgaConsultingServicesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalTransformationComponent } from './component/digital-transformation/digital-transformation.component';

const routes: Routes = [
  {
    path: '',
    component: DigitalTransformationComponent
  },
  {
    path: 'DgaConsultingServices',
    loadChildren: () =>
      import('./dga-consulting-services/dga-consulting-services.module').then(m => m.DgaConsultingServicesModule)
  },
  {
    path: 'EaServices',
    loadChildren: () =>
      import('./ea-services/ea-services.module').then(m => m.EaServicesModule)
  },
  {
    path: 'InnovationHub',
    loadChildren: () =>
      import('./innovation-hub/innovation-hub.module').then(m => m.InnovationHubModule)
  },
  {
    path: 'NdmoServices',
    loadChildren: () =>
      import('./ndmo-services/ndmo-services.module').then(m => m.NdmoServicesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalTransformationRoutingModule { }

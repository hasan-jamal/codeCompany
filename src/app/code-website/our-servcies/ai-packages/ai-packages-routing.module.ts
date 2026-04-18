import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiPackagesComponent } from './component/ai-packages/ai-packages.component';

const routes: Routes = [
  {
    path: '',
    component: AiPackagesComponent
  },
  {
    path: 'AiSmartCity',
    loadChildren: () =>
      import('./ai-smart-city/ai-smart-city.module').then(m => m.AiSmartCityModule)
  },
  {
    path: 'AiSmartFacility',
    loadChildren: () =>
      import('./ai-smart-facility/ai-smart-facility.module').then(m => m.AiSmartFacilityModule)
  },
  {
    path: 'AiSmartSecurity',
    loadChildren: () =>
      import('./ai-smart-security/ai-smart-security.module').then(m => m.AiSmartSecurityModule)
  },
  {
    path: 'SmartHybridTheaters',
    loadChildren: () =>
      import('./smart-hybrid-theaters/smart-hybrid-theaters.module').then(m => m.SmartHybridTheatersModule)
  },
    {
    path: 'AiDispatchingCenter',
    loadChildren: () =>
      import('./ai-dispatching-center/ai-dispatching-center.module').then(m => m.AiDispatchingCenterModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiPackagesRoutingModule { }

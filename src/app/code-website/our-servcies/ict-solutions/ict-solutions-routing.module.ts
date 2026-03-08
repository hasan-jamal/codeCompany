import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IctSolutionsComponent } from './component/ict-solutions/ict-solutions.component';

const routes: Routes = [
  {
    path: '',
    component: IctSolutionsComponent
  },
 {
        path: 'AutomationAndSecurity',
        loadChildren: () =>
          import('./automation-security/automation-security.module').then(m => m.AutomationSecurityModule)
      },
      {
        path: 'PassiveAndCivilWork',
        loadChildren: () =>
          import('./passive-civil-work/passive-civil-work.module').then(m => m.PassiveCivilWorkModule)
      },
      {
        path: 'DataAndCloudEngineering',
        loadChildren: () =>
          import('./data-cloud-engineering/data-cloud-engineering.module').then(m => m.DataCloudEngineeringModule)
      },
      {
        path: 'SoftwareAndDevelopment',
        loadChildren: () =>
          import('./software-development/software-development.module').then(m => m.SoftwareDevelopmentModule)
      },
      {
        path: 'DigitalHealthcare',
        loadChildren: () =>
          import('./digital-healthcare/digital-healthcare.module').then(m => m.DigitalHealthcareModule)
      },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IctSolutionsRoutingModule { }

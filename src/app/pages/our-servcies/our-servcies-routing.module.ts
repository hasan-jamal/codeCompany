import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServciesComponent } from './components/servcies/servcies.component';

const routes: Routes = [
  {
    path:'',
    component:ServciesComponent
  },
  {
    path: 'AISolutions',
    loadChildren: () =>
      import('./ai-solutions/ai-solutions.module').then(m => m.AiSolutionsModule)
  },
  {
    path:'AutomationAndSecurity',
    loadChildren: () =>
      import('./automation-security/automation-security.module').then(m => m.AutomationSecurityModule)
  },
  {
    path:'Passive&CivilWork',
    loadChildren: () =>
      import('./passive-civil-work/passive-civil-work.module').then(m => m.PassiveCivilWorkModule)
  },
  {
    path:'Data&CloudEngineering',
    loadChildren: () =>
      import('./data-cloud-engineering/data-cloud-engineering.module').then(m => m.DataCloudEngineeringModule)
  },
  {
    path:'Software&Development',
    loadChildren: () =>
      import('./software-development/software-development.module').then(m => m.SoftwareDevelopmentModule)
  },
  {
    path:'DigitalHealthcare',
    loadChildren: () =>
      import('./digital-healthcare/digital-healthcare.module').then(m => m.DigitalHealthcareModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurServciesRoutingModule { }

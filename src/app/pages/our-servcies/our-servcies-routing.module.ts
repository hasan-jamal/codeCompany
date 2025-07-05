import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServciesComponent } from './components/servcies/servcies.component';
import { PassiveCivilWorkComponent } from './passive-civil-work/passive-civil-work.component';
import { AutomationSecurityComponent } from './automation-security/component/automation-security/automation-security.component';
import { SoftwareDevelopmentComponent } from './software-development/component/software-development/software-development.component';

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
    component:PassiveCivilWorkComponent
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
    path:'Automation&Security',
    component:AutomationSecurityComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurServciesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServciesComponent } from './components/servcies/servcies.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { AISolutionsComponent } from './ai-solutions/ai-solutions.component';
import { AutomationSecurityComponent } from './automation-security/automation-security.component';
import { DataCloudEngineeringComponent } from './data-cloud-engineering/data-cloud-engineering.component';
import { PassiveCivilWorkComponent } from './passive-civil-work/passive-civil-work.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';

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
    path:'Automation&Security',
    component:AutomationSecurityComponent
  },
  {
    path:'Passive&CivilWork',
    component:PassiveCivilWorkComponent
  },
  {
    path:'Data&CloudEngineering',
    component:DataCloudEngineeringComponent
  },
  {
    path:'Software&Development',
    component:SoftwareDevelopmentComponent
  },
  {
    path:'Automation&Security',
    component:AutomationSecurityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurServciesRoutingModule { }

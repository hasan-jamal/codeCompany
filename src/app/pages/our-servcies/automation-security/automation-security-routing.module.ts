import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomationSecurityComponent } from './component/automation-security/automation-security.component';

const routes: Routes = [
  {
    path: '',
    component: AutomationSecurityComponent
  },
  // {
  //   path: 'AIDigitalTwin',
  //   loadChildren: () =>
  //     import('./ai-digital-twin/ai-digital-twin.module').then(m => m.AiDigitalTwinModule)
  // },
  // {
  //   path: 'AiComputerVision',
  //   loadChildren: () =>
  //     import('./ai-computer-vision/ai-computer-vision.module').then(m => m.AiComputerVisionModule)
  // }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomationSecurityRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomationSecurityComponent } from './component/automation-security/automation-security.component';

const routes: Routes = [
  {
    path: '',
    component: AutomationSecurityComponent
  },
  {
    path: 'digitalSignature',
    loadChildren: () =>
      import('./digital-signature/digital-signature.module').then(m => m.DigitalSignatureModule)
  },
  {
    path: 'roboticProcess',
    loadChildren: () =>
      import('./robotic-process/robotic-process.module').then(m => m.RoboticProcessModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomationSecurityRoutingModule { }

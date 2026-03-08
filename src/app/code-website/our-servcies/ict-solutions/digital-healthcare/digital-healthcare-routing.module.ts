import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalHealthcareComponent } from './component/digital-healthcare/digital-healthcare.component';

const routes: Routes = [
  {
    path: '',
    component: DigitalHealthcareComponent
  },
  {
    path: 'DRG',
    loadChildren: () =>
      import('./drg/drg.module').then(m => m.DrgModule)
  },
  {
    path: 'HIS',
    loadChildren: () =>
      import('./his/his.module').then(m => m.HisModule)
  },
  {
    path: 'RCM',
    loadChildren: () =>
      import('./rcm/rcm.module').then(m => m.RcmModule)
  }, 
   {
    path: 'TeleMedicine',
    loadChildren: () =>
      import('./tele-medicine/tele-medicine.module').then(m => m.TeleMedicineModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalHealthcareRoutingModule { }

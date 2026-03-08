import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeleMedicineComponent } from './component/tele-medicine/tele-medicine.component';

const routes: Routes = [
  {
    path: '',
    component: TeleMedicineComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeleMedicineRoutingModule { }

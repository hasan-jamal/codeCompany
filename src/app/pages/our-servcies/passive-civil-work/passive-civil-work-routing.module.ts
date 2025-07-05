import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassiveCivilWorkComponent } from './component/passive-civil-work/passive-civil-work.component';

const routes: Routes = [
  {
    path: '',
    component: PassiveCivilWorkComponent
  },
  // {
  //   path: 'Diagnosis-RelatedGroups',
  //   loadChildren: () =>
  //     import('./drg/drg.module').then(m => m.DrgModule)
  // },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassiveCivilWorkRoutingModule { }

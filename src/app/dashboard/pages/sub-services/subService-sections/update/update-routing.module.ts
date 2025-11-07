import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateServiceSectionComponent } from './component/update/update.component';

const routes: Routes = [
  { path: '', component: UpdateServiceSectionComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateServiceComponent } from './component/update-service/update-service.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:UpdateServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRoutingModule { }

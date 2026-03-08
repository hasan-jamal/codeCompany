import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiSmartSecurityComponent } from './component/ai-smart-security/ai-smart-security.component';

const routes: Routes = [
    {
      path: '',
      component:AiSmartSecurityComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiSmartSecurityRoutingModule { }

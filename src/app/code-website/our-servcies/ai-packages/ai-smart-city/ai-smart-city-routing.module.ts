import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiSmartCityComponent } from './component/ai-smart-city/ai-smart-city.component';

const routes: Routes = [
    {
      path: '',
      component:AiSmartCityComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiSmartCityRoutingModule { }

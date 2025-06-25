import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiDigitalTwinComponent } from './component/ai-digital-twin/ai-digital-twin.component';


const routes: Routes = [
    {
      path: '',
      component:AiDigitalTwinComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiDigitalTwinRoutingModule { }

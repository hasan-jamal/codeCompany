import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiComputerVisionComponent } from './component/ai-computer-vision/ai-computer-vision.component';

const routes: Routes = [
    {
      path: '',
      component:AiComputerVisionComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiComputerVisionRoutingModule { }

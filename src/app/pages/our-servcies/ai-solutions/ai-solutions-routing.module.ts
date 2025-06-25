import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AISolutionsComponent } from './ai-solutions.component';

const routes: Routes = [
  {
    path: '',
    component: AISolutionsComponent
  },
  {
    path: 'AIDigitalTwin',
    loadChildren: () =>
      import('./ai-digital-twin/ai-digital-twin.module').then(m => m.AiDigitalTwinModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiSolutionsRoutingModule { }

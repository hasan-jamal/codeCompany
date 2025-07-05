import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharePointSolutionsComponent } from './component/share-point-solutions/share-point-solutions.component';

const routes: Routes = [
    {
      path: '',
      component:SharePointSolutionsComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharePointSolutionsRoutingModule { }

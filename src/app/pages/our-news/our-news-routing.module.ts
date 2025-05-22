import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurNewsComponent } from './components/our-news/our-news.component';
import { OurNewsDetailsComponent } from './our-news-details/our-news-details.component';

const routes: Routes = [
  {
    path: '',
    component: OurNewsComponent
  },
  {
    path: 'newsDetails/:id',
    component: OurNewsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurNewsRoutingModule { }

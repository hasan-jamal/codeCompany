import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeWebsiteComponent } from './component/code-website/code-website.component';


const routes: Routes = [
  {
    path: '',
    component: CodeWebsiteComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
      },
      {
        path: 'aboutUs',
        loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./our-news/our-news.module').then(m => m.OurNewsModule)
      },  
      {
        path: 'contactUs',
        loadChildren: () => import('./contactUs/contact-us.module').then(m => m.ContactUsModule)
      }, 
      {
        path: 'ourServices',
        loadChildren: () => import('./our-servcies/our-servcies.module').then(m => m.OurServciesModule)
      },
      // {
      //   path: '**',
      //   loadChildren: () => import('./notFound/not-found.module').then(m => m.NotFoundModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class CodeWebsiteRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'home',
        data: { title: 'Dashboard', subtitle: 'Home Page' },
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'updateProfile/:id',
        data: { title: 'Dashboard', subtitle: 'Update User' },
        loadChildren: () => import('./pages/users/update/update.module').then(m => m.UpdateModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule)
      },
           {
        path: 'sub-services',
        loadChildren: () => import('./pages/sub-services/sub-services.module').then(m => m.SubServicesModule)
      },
      {
        path: 'Insights',
        loadChildren: () => import('./pages/insights/insights.module').then(m => m.InsightsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}

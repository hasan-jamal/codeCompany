import { Routes ,CanActivate} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
      {
        path: 'index',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule)
    },
    {
        path: 'aboutUs',
        loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
    },
    {
        path: 'news',
        loadChildren: () => import('./pages/our-news/our-news.module').then(m => m.OurNewsModule)
    },  
    {
        path:"contactUs",
        loadChildren:()=>import('./pages/contactUs/contact-us.module').then(m=>m.ContactUsModule)
    }, 
    {
        path: 'ourServices',
        loadChildren: () => import('./pages/our-servcies/our-servcies.module').then(m => m.OurServciesModule)
    },  
    // {
    //     path:"servcies",
    //     loadComponent:()=>import('./servcies-page/servcies-page.component').then((c)=>c.ServciesPageComponent)
    // },
    // {
    //     path:"servcies/:serviceId/:limit",
    //     component:ServciesPageComponent
    // },
    {
        path:"old-servcies/:serviceId",
        redirectTo: (route)=>{
            return `/servcies/${route.params['serviceId']}`
        }
    },
    {
        path:"dashboard",
        component:DashboardComponent,
        children:[
            {
                path:'profile',
                component:ProfileComponent
            },
    
        ],
        canActivate:[authGuard]
    },
    {
        path:"**",
        loadChildren: () => import('./pages/notFound/not-found.module').then(m => m.NotFoundModule)
    }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServciesComponent } from './components/servcies/servcies.component';

const routes: Routes = [
  {
    path: '',
    component: ServciesComponent,
    children: [
      {
        path: 'AISolutions',
        loadChildren: () =>
          import('./ai-solutions/ai-solutions.module').then(m => m.AiSolutionsModule)
      },
        {
        path: 'ICT-Solutions',
        loadChildren: () =>
          import('./ict-solutions/ict-solutions.module').then(m => m.IctSolutionsModule)
      },
      {
        path: 'AI-Packages',
        loadChildren: () =>
          import('./ai-packages/ai-packages.module').then(m => m.AiPackagesModule)
      },
      {
        path: 'DigitalTransformation',
        loadChildren: () =>
          import('./digital-transformation/digital-transformation.module').then(m => m.DigitalTransformationModule)
      },
      {
        path: '',
        redirectTo: 'AI-Packages',
        pathMatch: 'full'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurServciesRoutingModule { }

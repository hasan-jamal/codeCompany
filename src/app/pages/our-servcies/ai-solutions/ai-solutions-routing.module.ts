import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiSolutionsComponent } from './component/ai-solutions/ai-solutions.component';

const routes: Routes = [
  {
    path: '',
    component: AiSolutionsComponent
  },
  {
    path: 'AIDigitalTwin',
    loadChildren: () =>
      import('./ai-digital-twin/ai-digital-twin.module').then(m => m.AiDigitalTwinModule)
  },
  {
    path: 'AiComputerVision',
    loadChildren: () =>
      import('./ai-computer-vision/ai-computer-vision.module').then(m => m.AiComputerVisionModule)
  },
  {
    path: 'AiVoicebotChatbot',
    loadChildren: () =>
      import('./ai-voicebot-chatbot/ai-voicebot-chatbot.module').then(m => m.AiVoicebotChatbotModule)
  },
  {
    path: 'AiInnovationHub',
    loadChildren: () =>
      import('./ai-innovation-hub/ai-innovation-hub.module').then(m => m.AiInnovationHubModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiSolutionsRoutingModule { }

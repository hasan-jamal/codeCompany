import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiVoicebotChatbotComponent } from './component/ai-voicebot-chatbot/ai-voicebot-chatbot.component';

const routes: Routes = [
    {
      path: '',
      component:AiVoicebotChatbotComponent
    },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiVoicebotChatbotRoutingModule { }

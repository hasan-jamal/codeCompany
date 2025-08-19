import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartMeetingRoomsComponent } from './component/smart-meeting-rooms/smart-meeting-rooms.component';

const routes: Routes = [
    {
      path: '',
      component:SmartMeetingRoomsComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartMeetingRoomsRoutingModule { }

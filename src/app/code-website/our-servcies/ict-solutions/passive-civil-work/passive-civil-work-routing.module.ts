import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassiveCivilWorkComponent } from './component/passive-civil-work/passive-civil-work.component';

const routes: Routes = [
  {
    path: '',
    component: PassiveCivilWorkComponent
  },
  {
    path: 'BusinessResearch',
    loadChildren: () =>
      import('./business-research/business-research.module').then(m => m.BusinessResearchModule)
  },
  {
    path: 'commandCenter',
    loadChildren: () =>
      import('./command-center/command-center.module').then(m => m.CommandCenterModule)
  },
  {
    path: 'mediaCenter',
    loadChildren: () =>
      import('./media-center/media-center.module').then(m => m.MediaCenterModule)
  },
  {
    path: 'SmartMeetingRooms',
    loadChildren: () =>
      import('./smart-meeting-rooms/smart-meeting-rooms.module').then(m => m.SmartMeetingRoomsModule)
  },
  {
    path: 'NOC-SOC',
    loadChildren: () =>
      import('./soc-nocenvironments/soc-nocenvironments.module').then(m => m.SocNocenvironmentsModule)
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassiveCivilWorkRoutingModule { }

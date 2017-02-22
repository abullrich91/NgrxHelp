import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseFriendsComponent } from './choose-friends/choose-friends.component';
import { EventMetadataComponent } from './event-metadata/event-metadata.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';

const newEventRoutes: Routes = [
  {
    path: 'upload-images',
    component: UploadImagesComponent
  },
  {
    path: 'event-info',
    component: EventMetadataComponent
  },
  {
    path: 'choose-friends',
    component: ChooseFriendsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(newEventRoutes)],
  exports: [RouterModule]
})
export class NewEventRoutingModule { }

export const routedComponents = [ChooseFriendsComponent, EventMetadataComponent, UploadImagesComponent];

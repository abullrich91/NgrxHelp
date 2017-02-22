import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoteEventsComponent } from './vote-events/vote-events.component';
import { ChooseFriendsComponent } from './new-event/choose-friends/choose-friends.component';
import { EventMetadataComponent } from './new-event/event-metadata/event-metadata.component';
import { UploadImagesComponent } from './new-event/upload-images/upload-images.component';

const eventsRoutes: Routes = [
  {
    path: 'vote-events',
    component: VoteEventsComponent
  },
  // TODO recién levantado no toma el new-event.module. Es necesario editar la ruta, y luego devolverla al estado anterior para que la tome...
  /* {
    path: 'new-event',
    loadChildren: 'app/events/new-event/new-event.module'
  } */
  // TODO el atributo children es una solución temporal al problema presentado anteriormente.
  {
    path: 'new-event',
    children: [
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(eventsRoutes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }

export const routedComponents = [VoteEventsComponent];

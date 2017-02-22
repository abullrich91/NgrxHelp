import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { ChooseFriendsComponent } from './choose-friends/choose-friends.component';
import { ViewEventsComponent } from './view-events/view-events.component';
import { VoteEventsComponent } from './vote-events/vote-events.component';
import { MyVotesComponent } from './my-votes/my-votes.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventService } from './shared/event.service';
import { VoteService } from './shared/vote.service';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { NewEventModule } from './new-event/new-event.module';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    EventsRoutingModule,
    NewEventModule
  ],
  declarations: [EventsComponent,
    ChooseFriendsComponent,
    ViewEventsComponent,
    VoteEventsComponent,
    MyVotesComponent
  ],
  providers: [
    EventService,
    VoteService
  ]
})
export default class EventsModule { }

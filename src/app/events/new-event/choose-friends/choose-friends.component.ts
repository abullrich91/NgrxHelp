import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventOption } from '../../../events/shared/event-option.model';
import { Store } from '@ngrx/store';
import { Event } from '../../shared/event.model';
import { NewEventService } from '../shared/new-event.service';
import { FriendService } from '../../../friends/shared/friend.service';

@Component({
  selector: 'app-choose-friends',
  templateUrl: './choose-friends.component.html',
  styleUrls: ['../../../events/new-event/new-event.component.css', './choose-friends.component.css']
})
export class ChooseFriendsComponent implements OnInit {

  private searchTerm = '';
  private event;
  private friends = [];
  private friendsError = false;

  constructor(
    private _store: Store<any>,
    private formBuilder: FormBuilder,
    private router: Router,
    private newEventService: NewEventService,
    private friendService: FriendService
  ) {
    _store.select('newEvent').subscribe(newEvent => {
      this.event = newEvent;
      console.log('#############################');
      console.log('EventOptions: ' + this.event.eventOptions.length);
      console.log('EventType: ' + this.event.eventTypeId);
      console.log('Duration: ' + this.event.duration);
      console.log('Comment: ' + this.event.comment);
      console.log('Friends: ' + this.event.userIds.length);
      console.log('Privacy: ' + this.event.privacyId);
      console.log('Global: ' + this.event.isGlobal);
      console.log('Counter: ' + this.event.counter);
    })
  }

  ngOnInit() {
    this.friends = this.friendService.getFriends('58aaf6304fabf427e0acc08d');
  }

  selectedFriend(friendId: string) {
    return this.friendService.selectedFriend(friendId, this.event.userIds);
  }

  toggleFriend(friendId: string) {
    return this.friendService.toggleFriend(friendId, this.event.userIds);
  }

  toggleAllFriends() {
    return this.friendService.toggleAllFriends(this.friends, this.event.userIds);
  }

  submit() {
    if (this.event.userIds.length > 0) {
      this.newEventService.resetEvent();
      this.router.navigateByUrl('events/vote-events');
    } else {
      this.friendsError = true;
    }
  }

  back() {
    this.newEventService.updateEvent(this.event);
    this.router.navigateByUrl('events/new-event/event-info');
  }

}

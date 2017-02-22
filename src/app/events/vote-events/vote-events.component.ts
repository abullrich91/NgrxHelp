import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import 'hammerjs';

import { VoteService } from '../../events/shared/vote.service';

@Component({
  selector: 'app-vote-events',
  templateUrl: './vote-events.component.html',
  styleUrls: ['./vote-events.component.css']
})
export class VoteEventsComponent implements OnInit {

  private scrollDistance = 2;
  private scrollThrottle = 300;
  private votedEvents = [];
  private events = []

  constructor() {
  }

  ngOnInit() {
  }

}

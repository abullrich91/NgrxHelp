/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventService } from './event.service'
import { HttpService } from '../../core/http.service';
import { VoteService } from './vote.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';

describe('VoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        EventService,
        HttpService,
        VoteService
      ]
    });
  });

  it('should ...', inject([VoteService], (service: VoteService) => {
    expect(service).toBeTruthy();
  }));
});

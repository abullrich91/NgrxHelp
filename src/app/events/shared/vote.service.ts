import { Injectable } from '@angular/core';
import * as _ from "lodash";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from 'environments/environment';
import { Vote } from './vote.model';
import { EventService } from './event.service';

@Injectable()
export class VoteService {

  response: Boolean;
  errorMessage: string;

  constructor(private http: Http,
              private eventService: EventService) {
  }

}

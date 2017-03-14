import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Show } from './classes/show';
import {environment } from '../../environments/environment';

@Injectable()
export class ShowsService {
  private apiUrl = `${environment.apiUrl}/show`;  // URL to web API
  constructor(private http: Http) { }

  getShows(): Observable<Show[]> {
    return this.http.get(this.apiUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  addShow(show: Show): Observable<Show> {
     return this.http.post(this.apiUrl, show)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

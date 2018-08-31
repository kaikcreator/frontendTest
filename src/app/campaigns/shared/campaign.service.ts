import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Campaign } from './campaign';


@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private campaignsUrl = 'http://localhost:9000/campaigns'; 

  constructor(private http:HttpClient) { }

  /**
   * GET campaigns from the server.
   * Return an observable with an array of campaigns
   */  
  getCampaigns (): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.campaignsUrl)
    .pipe(
      map( items => items.map(item => {
        return new Campaign(item);
      }) ),
      catchError(this.handleError('getCampaigns', []))
    );
  }

  /**
   * Handle Http error.
   * Return empty result so app do not fail.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // in a serious app, log to a remote error log service
      console.error(`HTTP error on ${operation} `, error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}


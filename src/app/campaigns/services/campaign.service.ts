import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Campaign } from '../models/campaign';

/**
 * Campaign Service
 *
 * This service manages the connections with the server to retrieve
 * an individual campaign, or a list of campaigns.
 * It also stores the campaigns state and exposes a method to search
 * through that object.
 */
@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private campaignsUrl = 'http://localhost:9000/campaigns';
  public campaigns: Campaign[];

  constructor(private http: HttpClient) { }

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
      tap( campaigns => this.campaigns = campaigns),
      catchError(this.handleError('getCampaigns', []))
    );
  }

  /**
   * GET specific campaign from the server.
   * Return an observable with the requested campaign
   */
  getCampaignById (id) {
    return this.http.get<Campaign>(`${this.campaignsUrl}/${id}`)
    .pipe(
      map( item => new Campaign(item) ),
      catchError(this.handleError('getCampaign', null))
    );
  }

  /**
   * Find a specific campaign
   * Return an observable with the expected campaign. The campaign is searched locally,
   * but in case there are no campaigns in memory, the specific campaign is requested to the
   * server
   */
  findCampaignById(id): Observable<Campaign> {
    if (this.campaigns) {
      const campaign = this.campaigns.find( campaign => campaign._id === id);
      return of(campaign);
    } else {
      return this.getCampaignById(id);
    }
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


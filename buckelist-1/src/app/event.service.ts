import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  events: any[] = []; //events array starts empty in the service - then it pulls info from the API link

  apiUrl: string =
    'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=pLKSqSORlWUyzVke5EbWDYG0AADJmZat&';

  constructor(private http: HttpClient) {}

  getEvents(name: any): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getSearch3(searchK: any, cityParams: any, postalCode: any): Observable<any> {
    return this.http.get(this.apiUrl, {
      params: { keyword: searchK, city: cityParams, postalCode: postalCode },
    });
  }

  getName(postalCode: any): Observable<any> {
    return this.http.get(`${this.apiUrl}${postalCode}`);
  }
}

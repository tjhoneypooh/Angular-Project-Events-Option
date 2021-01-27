import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: any[] = []; //events array starts empty in the service - then it pulls info from the API link

  apiUrl:string = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=pLKSqSORlWUyzVke5EbWDYG0AADJmZat&stateCode=MI&postalCode="


  


  constructor(private http: HttpClient) { }

  getName(postalCode:number): Observable<any>{
    return this.http.get(`${this.apiUrl}${postalCode}`)
  }
}

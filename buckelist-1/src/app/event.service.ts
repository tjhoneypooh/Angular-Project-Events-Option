import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  

  events: any[] = [];

  apiUrl:string = "https://app.ticketmaster.com/discovery/v2/events.json?&apikey=pLKSqSORlWUyzVke5EbWDYG0AADJmZat&"

  
  

  constructor(private http: HttpClient) { }
  getSearch3(searchK:any, cityParams:any,postalCode:any,):Observable<any>{
    return this.http.get(this.apiUrl,{params:{keyword:searchK, city:cityParams, postalCode:postalCode}})}

  getName(postalCode:any): Observable<any>{
    return this.http.get(`${this.apiUrl}${postalCode}`)}
    
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class EventService {
  
  events: any[] = []; //events array starts empty in the service - then it pulls info from the API link
  public bucketList: any [] = [];
  
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

  getSearch1(postalCode: any): Observable<any> {
    return this.http.get(this.apiUrl, {
      params: {postalCode: postalCode},
    });
  }

  getSearch4(searchK: any): Observable<any> {
    return this.http.get(this.apiUrl, {
      params: {keyword: searchK},
    });
  }

  getSearch2(cityParams: any): Observable<any> {
    return this.http.get(this.apiUrl, {
      params: {city: cityParams},
    });
  }



  getName(postalCode: any): Observable<any> {
    return this.http.get(`${this.apiUrl}${postalCode}`);
  }
  getBucketList():any[] {
    return this.bucketList
  }

  addToBucketList(events:object){
    this.bucketList.push(events);
    console.log(this.bucketList);
    return this;
  }
  removeFromBucketList(index:number){
    this.bucketList.splice(index,1);
    return this.bucketList;
  }
}







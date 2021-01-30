import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  dateInput: any;
  eventCity: any;
  eventKeyword: any;
  eventPostalCode: any;

  constructor(private eventService: EventService) { }
//method to search API when user enters parameters
  findEvent(){
    this.eventService.getSearch3(this.eventKeyword, this.eventCity, this.eventPostalCode).subscribe(response =>{
      this.eventService.events = response._embedded.events
    })
  }
  findEvent4(){
    this.eventService.getSearch4(this.eventKeyword).subscribe(response =>{
      this.eventService.events = response._embedded.events
    })
  }

  findEvent2(){
    this.eventService.getSearch1(this.eventPostalCode).subscribe(response =>{
      this.eventService.events = response._embedded.events
    })
  }

  findEvent1(){
    this.eventService.getSearch2(this.eventCity).subscribe(response =>{
      this.eventService.events = response._embedded.events
    })
  }

  reloadPage() {
    window.location.reload();
 }

  ngOnInit() {  
    
  }
}
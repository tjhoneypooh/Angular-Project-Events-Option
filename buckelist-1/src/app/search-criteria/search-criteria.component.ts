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

  ngOnInit() {  
    
  }
}
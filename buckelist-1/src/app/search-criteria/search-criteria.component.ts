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
  returnData: any;
  eventPostalCode: any;

  constructor(private eventService: EventService) { }

  findEvent(){
    this.eventService.getSearch3(this.eventKeyword, this.eventCity, this.eventPostalCode).subscribe(response =>{
      this.returnData = response
      console.log(this.returnData)
    })
  }

  ngOnInit() {
    
  }
}
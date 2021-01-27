import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'buckelist';
  // Event = {
  //   postalCode: 0,
  //   stateCode: "string",
  //   date: 0,
  //   name: 'string',
  //   priceMin: "string",
  //   priceMax: "string",
  //   url: "string"
  // venue: "string";
  //   venuePhone: number;
  //   youTube: "string";
  // }


  constructor(private eventService: EventService) {}


  //Callback function

  ngOnInit () {
    // this.eventService.getSearch1("keyword").subscribe((data:any)=>{
    //   console.log(data)
    // })

    

    

    // this.eventService.getName(48201).subscribe((data:any) => {
      // console.log(data)
    //   this.Event.name = data._embedded.events[0].name
    //   this.Event.date = data._embedded.events[0].dates.initialStartDate.localDate
    //   this.Event.stateCode = data._embedded.events[0]._embedded.venues[0].state.stateCode
    //   this.Event.postalCode = data._embedded.events[0]._embedded.venues[0].postalCode
    //   this.Event.priceMin = data._embedded.events[0].priceRanges[0].min
    //   this.Event.priceMax = data._embedded.events[0].priceRanges[0].max
    //  console.log(this.Event)
      
    // })
  }
}

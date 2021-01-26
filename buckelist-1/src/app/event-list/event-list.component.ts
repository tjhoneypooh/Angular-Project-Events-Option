import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  // event = {
  //   name: 'string',
  // }

  get events(): any[] {
    return this.eventService.events;
  }

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getName(48201).subscribe((data:any) => {
      
      // console.log(data)
      // this.event.name = data._embedded.events[0].name
      // console.log(this.event)

      // this.eventService.events = data._embedded.events
      // console.log(this.eventService.events)

    //   this.e.name = data._embedded.events[0].name
    //   this.e.date = data._embedded.events[0].dates.initialStartDate.localDate
    //   this.e.stateCode = data._embedded.events[0]._embedded.venues[0].state.stateCode
    //   this.e.postalCode = data._embedded.events[0]._embedded.venues[0].postalCode
    //   this.e.priceMin = data._embedded.events[0].priceRanges[0].min
    //   this.e.priceMax = data._embedded.events[0].priceRanges[0].max
    //  console.log(this.eventService.events)
      


    })
  }
}

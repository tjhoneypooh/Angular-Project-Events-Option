import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  


  get events(): any[] {
    return this.eventService.events;
  }

    isShow = true;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  constructor(private eventService: EventService) {}

  ngOnInit() {
    
  }
}

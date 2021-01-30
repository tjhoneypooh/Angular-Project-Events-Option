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
  
  constructor(private eventService: EventService) {}

  ngOnInit () {
  }
}

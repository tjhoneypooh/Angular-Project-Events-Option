import { Component, OnInit } from '@angular/core';
import { EventService} from '../event.service';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {

  constructor( private eventService: EventService) { }

  ngOnInit(): void {
  
  }
  get bucketList(){  //get with a space after = keyword takes events from eventService to use "bucketList" in HTML
    return this.eventService.getBucketList();
  }
  removeFromBucketList(index:number){
    this.eventService.removeFromBucketList(index);
  }
}




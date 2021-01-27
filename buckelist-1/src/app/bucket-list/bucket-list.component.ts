import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// //click on event in the list to add to bucketlist

// bucketListArray: Event[] = []; //empty bucketlist array

// addEventToBucketList(){
//   let newEvent={event:'', }; //create new object to add to the event array 
//    newEvent.event = this.newTaskInput; // this reassigns the value of the task
//    this.bucketListArray.push(newEvent); //this pushes the new task into the todos array
//    this.newTaskInput = ''; //this clears the input for the next thing to be entered
//  };
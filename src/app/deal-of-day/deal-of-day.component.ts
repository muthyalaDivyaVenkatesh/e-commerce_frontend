import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal-of-day',
  templateUrl: './deal-of-day.component.html',
  styleUrls: ['./deal-of-day.component.scss']
})
export class DealOfDayComponent implements OnInit {

  deadline :any;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  constructor() { 
    this.deadline =  new Date(Date.now() + 86400000);
  }

  ngOnInit() {
    this.getTimeRemaining()
  }


  items  = ['/assets/images/captain.jpg','/assets/images/name.jpg','/assets/images/wood.jpeg','/assets/images/page_not_found.jpg']

  getTimeRemaining() {
    setInterval(()=>{
    const presetDate = new Date().toString()
    const total = Date.parse(this.deadline) - Date.parse(presetDate);
     this.seconds =  Math.floor((total/1000) %60);
    this. minutes = Math.floor((total/1000/60) %60);
    this.hours = Math.floor((total/(1000*60*60) %24))
    this.days = Math.floor(total/(100*60*60*24) )

  },1000)
}

}

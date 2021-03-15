import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ImageSliderComponent implements OnInit {
  items = [
     {path:'/assets/images/phone.jpg'},
     {path: '/assets/images/phone.jpg'},
     {path: '/assets/images/phone.jpg'}
  ]
  sliderArray : Object[];
  selectedIndex: any;
  transform: number;

  constructor(private data:DataService) {
    this.sliderArray = []
   }

  ngOnInit() {
    this.data.getData().subscribe((result:any)=>{
      console.log(typeof result)
      this.sliderArray =   [
        {"img": "http://bloquo.cc/img/works/1.jpg", "alt": "", "text": "365 Days Of weddings a year"},
        {"img": "http://bloquo.cc/img/works/2.jpg", "alt": "",  "text": "365 Days Of weddings a year"},
        {"img": "http://bloquo.cc/img/works/3.jpg", "alt": "", "text": "365 Days Of weddings a year"},
        {"img": "http://bloquo.cc/img/works/4.jpg", "alt": "",  "text": "365 Days Of weddings a year"},
        {"img": "http://bloquo.cc/img/works/5.jpg", "alt": "", "text": "365 Days Of weddings a year"}
    
    ]
    })
  }

  // selected(x){
  //   console.log("we ghaa")
  //   this.downSelected(x);
  //   this.selectedIndex = x;
  // }

  // downSelected(i){
  //   this.transform = 100 - (i) *50;
  //   this.selectedIndex = this.selectedIndex + 1;
  //   if(this.selectedIndex > 4)
  //     this.selectedIndex = 0
  // }


}

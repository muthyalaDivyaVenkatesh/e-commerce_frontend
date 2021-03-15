import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  list:string[]= ['local_offer','laptop_chromebook','local_grocery_store','kitchen','home','toys','Flight','personal_video']
  constructor() { }

  ngOnInit() {
  }

}

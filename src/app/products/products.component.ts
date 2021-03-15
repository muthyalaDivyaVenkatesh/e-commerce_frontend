import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  count = 10;
  isLoading:boolean = false
  constructor() { }
  
  ngOnInit() {
    this.getCount()
  }
  getCount() {

  }

  getByLowprice() {
    console.log("we are inside Low to High")
  }

  getByHighPrice() {
    console.log("we are inside the High to Low")
  }


}

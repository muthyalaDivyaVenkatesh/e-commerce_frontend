import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @ViewChild('singleProduct',{static:true}) singleProduct:any;

  constructor() { }

  ngOnInit() {
  }
  

  onMouseEnter(event){
    console.log("we are inside the MouseEnter",event.clientX,event.clientY);
    // console.log(this.singleProduct.nativeElement.getBoundingClientRect());
    console.log("we are isnide the pageY88",window.pageYOffset);
    // console.log("we are inside the pageXOffest",window.pageXOffset,document.documentElement)
  }

}

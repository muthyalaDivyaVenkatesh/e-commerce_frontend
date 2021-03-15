import { Component, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product/product.service';
import { Config } from '../config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts  = []
  lists: any[] = [];
  
  // names


  // lists= [{item:"mixer",qty:1,price:100}]
  constructor(
    private router:Router,private activatedRoute:ActivatedRoute,public productService:ProductService,public http:HttpClient
  ) { 
    // this.checkCart()
  }

  ngOnInit() {
    this.checkCart()
  }

  ngOnChange(change:SimpleChange){
  }

  ngAfterViewInit(){
  }

  navigateToCheckout(){
    
    this.router.navigateByUrl('/checkout')
  }

  checkCart(){
    // this.router.getCurrentNavigation().extras.state.productDeatils
    console.log(history.state.productDeatils,"ssssssssssss")
    history.state.productDeatils?this.cartProducts.push({...history.state.productDeatils}):''
    console.log("we are Inside the cart",this.cartProducts[0])
    if(history.state.productDeatils){
      console.log("If present go Inside")
    this.http.post(Config.URLS.cart,this.cartProducts).subscribe((val)=>{
      console.log(val,"weeeeeeeee")
    })
  }
    // this.productService.cart$.subscribe(cart =>{
    //   this.cartProducts.push({...cart})
    //   alert()
    //   this.lists = this.cartProducts.map(val => val)
    //   console.log("we are inside the Cart",cart,this.cartProducts)
    // })
    console.log("0000000000000000000000000000000000000000000000000000000000",this.cartProducts)
  }

  changeInQty(e){

    console.log("we are inside the Change in Qty",e.target.value)
    this.cartProducts[0].qty = e.target.value 
  }
  
}

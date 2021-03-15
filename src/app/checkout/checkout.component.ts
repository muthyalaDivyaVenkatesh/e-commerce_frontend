import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import  swal from 'sweetalert2';
import { Config } from '../config'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  names = ['name','mobileNo','pincode','locality','address','city','state','landMark']

  @ViewChild ('collapsible',{static:true}) collapsible:ElementRef;
  listenFn = {};
  addressForm: FormGroup;

  constructor(private elem: ElementRef,private renderer:Renderer2,public http:HttpClient) { }

  ngOnInit() {
    this.getCart()
    this.addFormFields()
  }


  ngAfterViewInit(){
    this.showCollapsible()
    this.showOrder()
   
  }

  showCollapsible(){
    let collapsible = this.elem.nativeElement.querySelectorAll('.collapsible');
    console.log("we  are inside collapsibe",collapsible[0])
    // for  loop
    for (let i=0;i<collapsible.length;i++) {
      // this.listenFn = {  collapsible[i]}
      collapsible[i].addEventListener('click', function(){
        this.classList.toggle("active")
        // console.log(this.classList)
        var content = this.nextElementSibling;
        console.log("we are inside the content",content)
        if(content.style.maxHeight){
          content.style.maxHeight = null;
        }
        else {
          // console.log("whhat is this scrollHeight",content.scrollHeight)
          content.style.maxHeight = content.scrollHeight + "px"
        }
      })
    }

  }

  addFormFields() {
    this.addressForm = new FormGroup({
      name: new FormControl(''),
      mobileNo:  new FormControl(''),
      pincode: new FormControl(''),
      locality: new FormControl(''),
      address:new FormControl('') ,
      city: new FormControl(''),
      state: new FormControl(''),
      landMark:new FormControl('')
    })
  }

  proceedToCheckout(){
    swal.fire({
      title: "Thanks for Buying",
      text:"Hope see you again",
    })
  }

  onSubmit(){
    // alert()
    console.log(this.addressForm.value);
    this.http.post(Config.URLS.getAddress,this.addressForm.value).subscribe((val)=>{
      // console.log(this.collapsible.maxHeight)
      swal.fire({
        title: "Thanks Your Address is Saved",
        text:"We make Sure Your Shipment will be succefull",
      })
    })

 
  }


  showOrder() {
    console.log("we are seeing the Order")
    this.http.get(Config.URLS.getOrders).subscribe((val)=>{
      console.log(val,"we are seeing orders")
    })
  }

  getCart(){
    // Bingo 
    console.log("we are inside the getCart")

  }
  ngOnDestroy() {
    if(this.listenFn){

    }
  }

}

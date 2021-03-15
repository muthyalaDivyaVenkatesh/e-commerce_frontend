import { animate, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  state,
  style,
} from '@angular/animations';

import { Config } from '../config'
 

import {Signin} from './signin'
import {Login} from './login'
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('cardFlip',[
      state('default', style({
         transform:'none',
         height:'350px'
      })),
      state('flipped',style({
        transform: 'rotateY(180deg)',
        height:'400px'
      })),
      transition('default => flipped',[
        animate('400ms')
      ]),
      transition('flipped => default',[
        animate('400ms')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  state = 'default';
  frontLink = "/assets/images/captain.jpg";
  backLink = "/assets/images/name.jpg";

  signIn = new Signin('test','test@test.com','test','test')

  logIn = new Login('test@test.com','test')
  InterceptorSkipHeader: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient,public router:Router)  { }


  ngOnInit() {
    console.log(this.logIn)
    console.log(this.signIn)
  
    console.log("we are seeing the headers",this.headers)
    Swal.fire('hi...','i have given you test Email for procedding,Fell Free to use your own Email and SignIn','warning')
  }

  cardClicked(){
    console.log("card clicked Sucessfully",this.state)
    if(this.state == 'default'){
       this.state = 'flipped'
    }else {
      this.state = 'default'
    }
  }

  onLogin(event,authObj:any) {
    console.log(event)
   
  }

   onSignIn(event,authObj:any){
    event.stopPropagation()
    console.log("we are inside SignIn",Config.URLS.signIn,authObj.value)
    let signIn = {
      "name":authObj.value.signinName,
      "email":authObj.value.signinEmail,
      "password": authObj.value.signinPassword
  }
  if(authObj.value.signinPassword.toString() == authObj.value.signinConformPassword.toString()){
    this.InterceptorSkipHeader = 'X-Skip-Interceptor';
    this.headers = new HttpHeaders().set('InterceptorSkipHeader', this.InterceptorSkipHeader);
    console.log("we are looking into",authObj)
    this.http.post<any>(Config.URLS.signIn,signIn,{headers:this.headers}).subscribe((val)=>{
      // alert(val)
      console.log(val)
      if(val.StatusCode == 200){
        Swal.fire('Success','your Account Is Created SuccessFull','success').then((value)=>{
          this.router.navigateByUrl('/login')
        })
      }
  

    })
  }
 



  }

  onSubmit(e,loginDetails){
   e.stopPropagation();
   console.log("we re inside submit")
   console.log("we are inside loginDetails",loginDetails.value)
   let login = {
     "email":loginDetails.value.email,
     "password":loginDetails.value.password
   }
   this.InterceptorSkipHeader = 'X-Skip-Interceptor';
   this.headers = new HttpHeaders().set('InterceptorSkipHeader', this.InterceptorSkipHeader);
   console.log("we are inside SkipHeaders",this.InterceptorSkipHeader)
   this.http.post<any>(Config.URLS.logIn,login,{headers:this.headers}).subscribe((val)=>{
     console.log("we are inside the Val",val)
     localStorage.setItem('shop-token',val['token'])
       Swal.fire('Success','You have Succesfully Loggedin','success').then((val)=>{
         console.log(val['token'])
        //  store in local Storage 
         this.router.navigateByUrl('/shop')
       })
   })
   

  }
  // redirectLogin


}

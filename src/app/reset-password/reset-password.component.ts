import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  resetPassword() {
    console.log("we are inside reset Password");
    Swal.fire(
      'Sent',
      'Plese  Check your Email For Password Reset Link',
      'success'
    ).then((result)=>{
      console.log(result)
      this.router.navigateByUrl('login')
    })

  
 
   
  }

}

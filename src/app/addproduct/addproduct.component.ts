import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  imageURL: any;
  uploadForm:FormGroup;

  constructor(public fb:FormBuilder) { 
    this.uploadForm = this.fb.group({
      avatar:[null],
      name:[''],
      price:[''],
    })
  }

  ngOnInit() {
  }

  // ImagePreview
  showPreview(event){
    // alert()
    // file
    const file = (event.target as HTMLInputElement).files[0];
   
    // uploadForm
    this.uploadForm.patchValue({
      avatar: file
    });
    //  update and validity
    this.uploadForm.get('avatar').updateValueAndValidity();

    // file preview
    const reader = new FileReader();
    reader.onload = () =>{
       this.imageURL = reader.result as string;
      //  console.log(this.imageURL);
       
    }
     reader.readAsDataURL(file)
  }

  submit(){
    console.log(this.uploadForm.value)
  }

}


import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { Router,ActivatedRoute } from  '@angular/router';
import { map } from 'rxjs/operators';
import { Config } from '../config'
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations:[
    // anomations goes heree
    trigger('moveLittle',[
      state('close',style({
        cursor:'pointer'
      })),
      state('open',style({
        transform: 'translateY(-20px)',
        zIndex:100,
        cursor:'pointer',
        background:'white',
      })),
      transition('close=>open',[
        animate('1s')
    ]),
      transition('open => close',[
        animate('1s')
      ])
    ])
  ]
})
export class ProductComponent implements OnInit {

  state = 'close';
  products: any;

  constructor( public router: Router,public http:HttpClient, public productService:ProductService ) { }

  ngOnInit() {
    this.getProducts()
  }

  onHover(val) {
    console.log("clicked Hove")
    this.state = val;
  }

  productPage(product) {
    console.log(product._id)
    console.log(Config.URLS.singleProduct)
    this.router.navigateByUrl(`/product/${product._id}`)

  }
  extractProducts(data){
    return data.products
  }

  getProducts(){ 
    this.http.get(Config.URLS.products).pipe(map(this.extractProducts))
    .subscribe(val => {
      console.log(val,val.length)
      this.products = val.map(val =>{
        if(val.imageUrl){
          val.imageUrl = Config.URLS.images+val.imageUrl
        }
        return {...val}
      })
      // this.products = [...val,val.imageUrl:Config.]
      // console.log("we are inside the getProduts",Config.URLS.images.replace('imagePath',this.products[0].imageUrl))
    })

   
  }
}


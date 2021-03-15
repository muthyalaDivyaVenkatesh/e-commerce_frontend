import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from '../config';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-trail-zoom',
  templateUrl: './trail-zoom.component.html',
  styleUrls: ['./trail-zoom.component.scss']
})
export class TrailZoomComponent implements OnInit {

  @ViewChildren('imgContainer') imgContainer:any
  @ViewChild('result',{static:true}) myResult:any;
  @ViewChild('image',{static:true}) image:any;
  img: any;
  lens: any;
  cx: number;
  cy: number;
  result: any;
  touched: boolean = false;
  productImg = ''
  pathImage: any;
  productDetails: { prodId: any; content: any; price: any; title:string,qty:any};
   
//  @HostListener('document:mousemove',['$event'])
//  onMouseMove(e) {
//    console.log(e)
//  }

  constructor(private render:Renderer2,private router:Router,public productService:ProductService,private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit() {
  this.getData()
  }

  ngAfterViewInit() {
 

  }

   imageZoom() {
     this.img = this.image.nativeElement;
    this. result = this.myResult.nativeElement;
    // Now create a lens
    this.lens = this.render.createElement('div');
    // set Id and class
    this.render.addClass(this.lens,'img-zoom-lens');
    
    console.log(this.lens)
    this.render.insertBefore (this.imgContainer.first.nativeElement,this.lens,this.img)
    // this.render.appendChild()
    // console.log(this.lens)
    console.log(this.lens.offsetWidth,"<>>><><><><>")
    console.log(this.lens.offsetHeight)
    console.log(this.result.offsetWidth)
    console.log(this.result.offsetHeight)
    // console.log(this.result.offsetHeight,this.lens.offsetHeight)

    this.cx = this.result.offsetWidth/this.lens.offsetWidth;
   this.cy = this.result.offsetHeight/this.lens.offsetHeight;

   console.log(this.cx,this.cy,"we are seeing cx anc cy",this.productImg)

   this.result.style.backgroundImage = `url(${this.productImg})`;
    

  //  this.result.style.width = '300px'
  //  this.result.style.height = '240px'
   this.result.style.backgroundRepeat = 'no-repeat';
   this.result.style.backgroundPosition = 'center'
  //  result.style.backgroundSize = img.width * cx + "px " + img.height * cy + "px";
   this.result.style.backgroundSize =  (this.img.width * this.cx)  +  (this.img.height * this.cy )+ "px";
   console.log("we are seeing the background Image",this.result.style.backgroundSize,)
   this.render.listen(this.lens,'mousemove',(event)=>this.moveLens(event))
   this.render.listen(this.img,'mousemove',(event)=>this.moveLens(event))
  //  console.log(this.cx,this.cy)

    // console.log(img)
    // console.log(this.imgContainer)
  }

 

  getCursorPos(e){
    let a,x=0,y=0;
    // eveent e
    e= e
    // get X and y position of the image
    a = this.img.getBoundingClientRect()
    console.log("we are inside the getCursorPos",a,e)
    // calculate X and y Cordinates
    x = e.pageX - a.left;
    y= e.pageY - a.top;
    // retun X and Y
    console.log("we  are looking at x andy",x ,y)
    // conside page Scrolling
    // x = x-window.pageXOffset;
    // y = y-window.pageYOffset;
    x = e.clientX -a.left;
    y=e.clientY -a.top;
    console.log("we are lookung at finally x",x,y)
    return {x:x,y:y}
    
  }

  moveLens(e) {
    console.log("we are listing to the event",e)
    let pos,x,y;
    // e.preventDefault();
    pos = this.getCursorPos(e);
    console.log("we are seeing the pos",pos)
    // alert()
    // calculate the position of lens
    // console.log(this.lens.offsetHeight)
    // console.log(this.lens.offsetWidth)
    console.log(this.lens.offsetWidth)
    x = pos.x - (this.lens.offsetWidth/2);
    y = pos.y  - (this.lens.offsetHeight/2);
    // console.log("we are looking at ////")
    // console.log(x,this.img.width-this.lens.offsetWidth)
    // console.log(y,this.img.height-this.lens.offsetHeight)
    // prevent the lens 
    if ( x > this.img.width  - this.lens.offsetWidth){
      x = this.img.width - this.lens.offsetWidth;
    }
      if(x<0) { x = 0};
      if(y>this.img.height - this.lens.offsetHeight){
        y = this.img.height - this.lens.offsetHeight 
      }
      if(y<0){y=0}
      // set position of lens
      this.lens.style.left = x+"px";
      this.lens.style.top = y + "px";
      // console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",x)
      console.log("we are inside the backgroundPosition",[x*this.cx,y*this.cy])
      // this.result.style.backgroundPosition= "-" + (x * this.cx) + "px -" + (y * this.cy) + "px" 
      // this.result.style.backgroundRepeat = "no-repeat" 
      this.result.style.backgroundPosition = "-" + x * this.cx + "px -" + y * this.cy + "px";
  }

  mouseIn(){
    // console.log("we are inside MouseIn")
    this.touched = true;
    this.myResult.nativeElement.style.visibility = 'visible'
    // setTimeout(()=>this.imageZoom(),5000)
  }

  mouseOut() {
    this.touched = false;
    this.myResult.nativeElement.style.visibility = 'hidden'
  }


  moveToCart(e){
    
    e.stopPropagation()
    this.productService.cart(this.productDetails)
    this.router.navigate(["/cart"],{state:{productDeatils: this.productDetails}})
  }

  getData() {
    // alert()
    console.log(this.route.snapshot.params.id,"////////")
    this.http.get(Config.URLS.singleProduct.replace(':id',this.route.snapshot.params.id)).subscribe((val)=>{
      this.productImg = Config.URLS.images+val['product']['imageUrl']
      console.log("va",val)
      this.productDetails = {
        prodId:val['product']['_id'],
        title:val['product']['title'],
        content:val['product']['content'],
        price: val['product']['price'],
        qty:1
      }
      // alert()
      this.imageZoom()
      
    })
    // this.productService.dataSubject.subscribe((val)=>{
    //   alert()
    //   console.log(val,"we are from Trail Zoom Component",Config.URLS.images+val['product']['imageUrl'])
    //   this.productImg = Config.URLS.images+val['product']['imageUrl']
    // })
  }
  createImageFromBlob(data: any) {
    throw new Error('Method not implemented.');
  }



  ngOnDestroy() {
    this.moveLens("d")
  }
  

}

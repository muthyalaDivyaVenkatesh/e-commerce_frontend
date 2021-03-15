import { ContentChild, ContentChildren, Directive, ElementRef, HostListener, TemplateRef } from "@angular/core";

@Directive({
    selector: '[imageZoom]'
})

export class SingleItemDirective {
    @ContentChild ('preview',{static:true})  preview:any;
    @ContentChild('img',{static:true}) Image:any
    pre: any;
    touched: boolean = false;
    count: number = 0;
    @HostListener('document:mousemove', ['$event']) 
    // when mouse move
    onMouseMove(event:any) {
        this.touched = true
        ++this.count
        // console.log("This count",this.count)
        event.stopPropagation();
        // this.pre.style.visibility = "visible"
        this.preview.nativeElement.style.visibility = 'visible';
        // for temparary we can use 
        let imgSrc = this.Image.nativeElement.src
    //    if( this.touched && this.count == 1 ) {
        let imagLink = imgSrc.split('4200')[1]
         this.preview.nativeElement.style.backgroundImage = `url(${imagLink})`;
         this.preview.nativeElement.style.backgroundRepeat = 'no-repeat'
        console.log(this.count)
        console.log(event.clientX,event.clientY);
        
    //    }
        var posX = event.clientX;
        var posY = event.clientY;
        console.log("we are seeing the event",event)
        console.log(posX,posY)
        console.log(this.preview.nativeElement,">><<><>>")
        this.preview.nativeElement.style.backgroundPosition=(posX *0.5)+"px "+(posY*0.5)+"px";
      
      
    }

    @HostListener('document:mouseout',['$event'])
    // onMouseOut
    onMouseOut(event:any){
        this.touched = false;
        this.count = 0
        event.stopPropagation();
        this.pre = this.preview.nativeElement
        this.pre.style.visibility = 'hidden';
        // console.log("we are inside mouse Out",this.pre)
        // console.log(this.Image)
    }

    public el:any
    constructor(el:ElementRef){
      
        // pre.style.visibility = 'hidden'

    }

    ngOnInit(){
        this.createReactagle()
    }

    ngOnChange(){
        this.createReactagle()
    }
    // create a rectangle 

    createReactagle() {
        console.log("we are inside the Rectangle")
        console.log(this.el)

    }

}
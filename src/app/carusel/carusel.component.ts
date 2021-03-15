import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';
import { Component, ContentChildren, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CarouselItemDirective } from './carousel-item-dir';
import { CarouselItemElement } from './carousel-item-Singledir';

@Component({
  selector: 'carousel',
  exportAs: 'carousel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit {
 
  @ViewChild('carousel',{static:false}) private carousel : ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  private player : AnimationPlayer;
  private itemWidth : number;
  // contentChildren
  @ContentChildren(CarouselItemDirective) items:QueryList<CarouselItemDirective>
  @ViewChildren(CarouselItemElement,{read:ElementRef}) private itemsElements: QueryList<ElementRef>;
  carouselWrapperStyle = {}
  currentSlide: number = 0;


  constructor(private builder : AnimationBuilder) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      console.log(this.itemsElements)
      console.log(this.items);
      
      this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
      this.carouselWrapperStyle = {
        width: `${this.itemWidth}px`
      }
      console.log(this.itemWidth)
    })

    setInterval(()=>{
      this.next()
    },5000)
 
  }

  next() {
    // if (this.currentSlide+1 == 3) 
   
    this.currentSlide = (this.currentSlide + 1) % this.items.length;

    const offset = this.currentSlide * this.itemWidth;

    const myAnimation : AnimationFactory = this.builder.build([
      animate(this.timing, style({ transform : `translateX(-${offset}px)`}))
    ])
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play()
    if(this.currentSlide + 1 === this.items.length)  this.currentSlide = 0  ;

    // if(this.currentSlide +1 === this.items.length) this.prev()
  }

  // prev
  prev() {
    if(this.currentSlide ==0) return ;
    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;

    const myAnimation : AnimationFactory = this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);
    console.log(`translateX(-${offset}px)`)

    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

}

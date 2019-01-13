import { Input,Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFooterfix]',
  host: {
    '(window:scroll)': 'onScroll($event)',
    '(window:resize)':'onResize($event)'
  }
})
export class FooterfixDirective  implements OnInit{

  currPos: Number = 0;
  prevClass:any;
  posoffset:Number=0;
  normalClasses:any;
  fixedClasses:any;
  constructor(private el:ElementRef) { }
  ngOnInit(){
    console.log(this.el);
     this.posoffset = document.querySelector("#"+this.el.nativeElement.id).getBoundingClientRect().top;
     this.prevClass = document.querySelector("#"+this.el.nativeElement.id).classList;
     this.normalClasses = this.prevClass.value;
     this.fixedClasses = this.prevClass.value + " page-scroll-footer";;

  }
  onResize(evt){
    this.posoffset = document.querySelector("#"+this.el.nativeElement.id).getBoundingClientRect().top;
  }
  onScroll(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if(this.currPos >= this.posoffset ) {
        document.querySelector("#"+this.el.nativeElement.id).className=this.fixedClasses;
    } else {
      document.querySelector("#"+this.el.nativeElement.id).className=this.normalClasses;
    }
}
}

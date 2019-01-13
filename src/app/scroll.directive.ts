
import {
  Directive,
  Input,
  HostListener
} from "@angular/core";

@Directive({
  selector: '[appScroll]',
  host:{'(window:resize)':'onResize($event)'}
})
export class ScrollDirective {
  constructor() { }
  @Input('appScroll') appPos: string;
  @HostListener('click') onclick() {
    let element = document.querySelector("#"+this.appPos);
    setTimeout(() => {
      if (element) element.scrollIntoView({ behavior: 'smooth',inline: "start", block: 'start' })
    });
  }
  onResize(evt){
    let element = document.querySelector("#"+this.appPos);
    setTimeout(() => {
      if (element) element.scrollIntoView({ behavior: 'smooth',inline: "start", block: 'start' })
    });
  }

}

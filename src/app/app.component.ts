
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  isScrolled = false;
  currPos: Number = 0;
  posoffset:number;
  width = '100px';
  color='red';
  ngOnInit(){
  }
  setMyStyles(input){
  let styles = {
    'width': input,

  };
  return styles;
}
}


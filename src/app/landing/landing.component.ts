import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

  constructor() {}
  count=0;
  display1="none";
  src1="/assets/down-arrow.jpg";
  src2="/assets/down-arrow.jpg";
  src3="/assets/down-arrow.jpg";
  src4="/assets/down-arrow.jpg";
  src5="/assets/down-arrow.jpg";
  display2="none";
  display3="none";
  display4="none";
  display5="none";
  hide1(){
    this.count++;
    if (this.count%2==1) {
      this.display1="block";
      this.src1="/assets/up-arrow.png";

    }
    else{
      this.display1="none"
      this.src1="/assets/down-arrow.jpg";
  
    };
  }
    hide2(){
      this.count++;
      if (this.count%2==1) {
        this.display2="block";
      this.src2="/assets/up-arrow.png";

      }
      else{
        this.display2="none"
        this.src2="/assets/down-arrow.jpg";
  
      };
    }
    hide3(){
      this.count++;
      if (this.count%2==1) {
        this.display3="block";
      this.src3="/assets/up-arrow.png";

      }
      else{
        this.display3="none"
        this.src3="/assets/down-arrow.jpg";
  
      };
    }
    hide4(){
      this.count++;
      if (this.count%2==1) {
        this.display4="block";
      this.src4="/assets/up-arrow.png";

      }
      else{
        this.display4="none"
        this.src4="/assets/down-arrow.jpg";
  
      };
    }
    hide5(){
      this.count++;
      if (this.count%2==1) {
        this.display5="block";
      this.src5="/assets/up-arrow.png";

      }
      else{
        this.display5="none"
        this.src5="/assets/down-arrow.jpg";
  
      };
    }
  ngOnInit(): void {
  }

}

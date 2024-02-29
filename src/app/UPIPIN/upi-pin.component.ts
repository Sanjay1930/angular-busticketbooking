import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './upi-pin.view.html',
//   styleUrls: ['./app.component.css']
})
export class UPIPaymentPinComponent {
  
  upiPin : number = 0;

  constructor(private router: Router){
  }
  
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  add(val : number){
    this.upiPin = this.upiPin*10 + val;
    if(this.upiPin.toString.length == 6){
      this.router.navigate(['payment-verified']);
    }
  }
  
  del(){
    this.upiPin =  Math.round((this.upiPin)/10);
  }
}

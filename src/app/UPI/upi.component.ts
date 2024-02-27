import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './upi.view.html',
//   styleUrls: ['./app.component.css']
})
export class UPIPaymentComponent {
   
  constructor(private router: Router){
  }
  
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  
    
}

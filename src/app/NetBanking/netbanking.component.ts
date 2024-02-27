import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './netbanking.view.html',
//   styleUrls: ['./app.component.css']
})
export class NetBankingComponent {
   
constructor(private router: Router){
}

goToPage(pageName:string){
  this.router.navigate([`${pageName}`]);
}

  

}

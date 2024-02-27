import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './adminlogin.view.html',
//   styleUrls: ['./app.component.css']
})
export class AdminLoginComponent {

  
constructor(private router: Router){
}

goToPage(pageName:string){
  this.router.navigate([`${pageName}`]);
}

}

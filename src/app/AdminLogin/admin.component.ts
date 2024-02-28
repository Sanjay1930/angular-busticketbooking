import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from './ladmin.model';


@Component({
  selector: 'app-root',
  templateUrl: './adminlogin.view.html',
//   styleUrls: ['./app.component.css']
})
export class AdminLoginComponent {

  
    AdminDetails : admin = new admin();

    constructor(private router: Router){
    }

    goToPage(pageName:string){
      this.router.navigate([`${pageName}`]);
    }

    checkLoginCredentials(){
      console.log(this.AdminDetails.username +" "+this.AdminDetails.password)
    }



}

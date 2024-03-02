import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { createClient  } from '@supabase/supabase-js';
import { admin } from './admin.model';


const supabaseUrl = 'https://padzmoooavbbkyvqjpjj.supabase.co'; // Replace with your Supabase project URL
 const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhZHptb29vYXZiYmt5dnFqcGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNjAxNzUsImV4cCI6MjAyNDkzNjE3NX0.uhAQbTIv9IOOH-stFHHXQteDed6xZuOWtclMDjWP0zY'; 
 const supabase = createClient(supabaseUrl, supabaseAnonKey);

@Component({
  // selector: 'app-root',
  templateUrl: './adminlogin.view.html',
//   styleUrls: ['./app.component.css']
})
export class AdminLoginComponent {

    AdminDetails : admin = new admin();

    outputData : any;

    allDetails : any;

    isAdmin : boolean = false;

    constructor(private router: Router){
    }

    goToPage(pageName:string){
      this.router.navigate([`${pageName}`]);
    }

    getCredentials(){
      supabase.from('admin_login').select('*').then((res) => {
        this.outputData = res.data
        this.checkLoginCredentials()
      })
    }

    async checkLoginCredentials(){
      if((this.outputData[0]['username'] == this.AdminDetails.username ) && (this.outputData[0]['password'] == this.AdminDetails.password)){
        this.isAdmin = true;   
      }else{
        alert("Wrong Login credentials")
      }
    }



}

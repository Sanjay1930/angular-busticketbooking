import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { createClient  } from '@supabase/supabase-js';
import { admin } from './admin.model';


const supabaseUrl = 'https://dujuelyrtbutsjxzikpq.supabase.co'; // Replace with your Supabase project URL
 const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1anVlbHlydGJ1dHNqeHppa3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTU0OTEsImV4cCI6MjAxMDM3MTQ5MX0.g8RzXeGSaIaHZF2GYKszVb6-MnA6Q6DTagVbZUsfYBs'; 
 const supabase = createClient(process.env.URL, process.env.KEY);

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

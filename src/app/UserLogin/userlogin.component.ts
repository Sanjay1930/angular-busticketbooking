import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { createClient  } from '@supabase/supabase-js';
import {  Router } from '@angular/router';


const supabaseUrl = 'https://dujuelyrtbutsjxzikpq.supabase.co'; // Replace with your Supabase project URL
 const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1anVlbHlydGJ1dHNqeHppa3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTU0OTEsImV4cCI6MjAxMDM3MTQ5MX0.g8RzXeGSaIaHZF2GYKszVb6-MnA6Q6DTagVbZUsfYBs'; 
 const supabase = createClient(supabaseUrl, supabaseAnonKey);


@Component({
  // selector: 'header-comp',
  templateUrl: './userlogin.view.html',
//   styleUrls: ['./app.component.css']
})
export class UserLoginComponent implements OnInit {

  UserDetails : User = new User();

  isValidUser : boolean = false;
  currentUser : any;

  constructor(private router:Router){}

  allUsers : any;
  ngOnInit(): void {
    this.getCredentials()
  }

  async getCredentials(){
    await supabase.from('login_details').select('*').then(res => {
      this.allUsers = res.data;
    })
  }

  checkCredentials(){
    for(let a of this.allUsers){
      if((a.username == this.UserDetails.username) && (a.password == this.UserDetails.password)){
        console.log("Hweyy found one")
        this.isValidUser = true;
        this.currentUser = a
        break
      }
    }

    if(this.isValidUser){
      localStorage.setItem('current_user', this.currentUser.user_id)
      localStorage.setItem('logged_out','user_logged')
      console.log("Current User : ", this.currentUser);
      this.router.navigate(['/'])
    }
  }

}

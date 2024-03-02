import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { createClient  } from '@supabase/supabase-js';


const supabaseUrl = 'https://dujuelyrtbutsjxzikpq.supabase.co'; // Replace with your Supabase project URL
 const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1anVlbHlydGJ1dHNqeHppa3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTU0OTEsImV4cCI6MjAxMDM3MTQ5MX0.g8RzXeGSaIaHZF2GYKszVb6-MnA6Q6DTagVbZUsfYBs'; 
 const supabase = createClient(supabaseUrl, supabaseAnonKey);



@Component({
  selector: 'main-comp',
  templateUrl: './main.view.html',
//   styleUrls: ['./app.component.css']
})
export class MainComponent implements OnInit{

  currentUser : any = localStorage.getItem('current_user');
  valid : boolean = false;
  username : any;
  showName : any = "Guest";
  constructor(private router: Router){}

  ngOnInit(): void {
    this.User()
    this.logRef()
  }

  logRef(){
    if(localStorage.getItem('logged_out')){
      console.log("hello")
      location.reload()
      localStorage.removeItem('logged_out')
    }
  }
  User(){
    if(this.currentUser){
      this.getCredentials()
      this.valid = true
    }
  }

  async getCredentials(){
    await supabase.from('login_details').select('*').eq('user_id',this.currentUser).then(res => {
      this.username = (res.data)
      this.username = this.username[0]
      this.showName = this.username.username
    })
  }

  setLink(){
    if(this.currentUser)
      this.router.navigate(['details'])
    else{
      alert('Login for payment')
      this.router.navigate(['user_login'])
    }
  }

}

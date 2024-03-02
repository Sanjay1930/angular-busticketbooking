import { Component, OnInit } from '@angular/core';

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

  currentUser : any;
  isUser :boolean = false;
  username : any;

  ngOnInit(): void {
    this.User()
  }

  User(){
    if(localStorage.getItem('current_user')){
      this.currentUser = localStorage.getItem('current_user')
      this.isUser = true;
      this.getCredentials()
      console.log(this.currentUser)
    }
  }

  async getCredentials(){
    await supabase.from('login_details').select('*').eq('user_id',this.currentUser).then(res => {
      this.username = (res.data)
      this.username = this.username[0]
      console.log(this.username)
    })
  }

}

import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createClient  } from '@supabase/supabase-js';



const supabaseUrl = 'https://dujuelyrtbutsjxzikpq.supabase.co'; // Replace with your Supabase project URL
 const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1anVlbHlydGJ1dHNqeHppa3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTU0OTEsImV4cCI6MjAxMDM3MTQ5MX0.g8RzXeGSaIaHZF2GYKszVb6-MnA6Q6DTagVbZUsfYBs'; 
 const supabase = createClient(supabaseUrl, supabaseAnonKey);


@Component({
  templateUrl: './payment_conf.view.html',
//   styleUrls: ['./app.component.css']
})
export class PaymentConfirmationComponent implements OnInit {

  fare : any;
  details : any;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.fare = localStorage.getItem('fare')
    this.getCredentials()
  }

  async getCredentials(){
    let user_id = localStorage.getItem('current_user')
    console.log(user_id)
    await supabase.from('login_details').select('*').eq('user_id',user_id).then(res => {
      this.details = res.data
      this.details = this.details[0]
      console.log(this.details)
    })

  }

  gotoPage(page:string){
    this.router.navigate([`${page}`])
  }


}

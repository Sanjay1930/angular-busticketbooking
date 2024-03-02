import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createClient  } from '@supabase/supabase-js';



const supabaseUrl = 'https://padzmoooavbbkyvqjpjj.supabase.co'; // Replace with your Supabase project URL
 const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhZHptb29vYXZiYmt5dnFqcGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNjAxNzUsImV4cCI6MjAyNDkzNjE3NX0.uhAQbTIv9IOOH-stFHHXQteDed6xZuOWtclMDjWP0zY'; 
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
    await supabase.from('login_details').select('balance').eq('user_id',user_id).then(res => {
      this.details = res.data
      this.details = this.details[0]
      console.log(this.details)
    })

  }

  gotoPage(page:string){
    if(Number(localStorage.getItem('fare')) < this.details.balance)
      if(page != '/')
        this.router.navigate([`${page}`])
      else{
        this.router.navigate(['/'])
      }
    else{
      alert('Insufficient Funds contact admin')
      this.router.navigate(['/'])
    }
  }


}

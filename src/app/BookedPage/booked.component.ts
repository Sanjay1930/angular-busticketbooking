import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createClient  } from '@supabase/supabase-js';
import { ticket } from './data.model';



const supabaseUrl = 'https://dujuelyrtbutsjxzikpq.supabase.co'; // Replace with your Supabase project URL
 const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1anVlbHlydGJ1dHNqeHppa3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTU0OTEsImV4cCI6MjAxMDM3MTQ5MX0.g8RzXeGSaIaHZF2GYKszVb6-MnA6Q6DTagVbZUsfYBs'; 
//  const supabase = createClient(supabaseUrl, supabaseAnonKey);
const supabase = createClient(process.env.URL, process.env.KEY);



@Component({
  // selector: 'app-root',
  templateUrl: './booked.view.html',
//   styleUrls: ['./app.component.css']
})
export class BookdedComponent implements OnInit {

  
constructor(private router: Router){
}

data : ticket = new ticket()
temp : any

ngOnInit(): void {
  console.log(this.data);
  
  this.cal()
}
async cal(){

  await supabase.from('transactions').select('*').eq('tcid',String(localStorage.getItem('tid'))).then((res) => {
    this.temp = res.data
    this.data = this.temp[0]
    debugger
  })
    localStorage.removeItem('tcid')
    // this.router.navigate(['/']);
  }

  gotoPage(page:string){
    this.router.navigate([`${page}`])
  }
}



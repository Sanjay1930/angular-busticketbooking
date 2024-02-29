import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createClient  } from '@supabase/supabase-js';
import { ticket } from '../Details/details.model';


// import { ticket } from './details.model';

const supabaseUrl = 'https://dujuelyrtbutsjxzikpq.supabase.co'; // Replace with your Supabase project URL
 const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1anVlbHlydGJ1dHNqeHppa3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTU0OTEsImV4cCI6MjAxMDM3MTQ5MX0.g8RzXeGSaIaHZF2GYKszVb6-MnA6Q6DTagVbZUsfYBs'; 
 const supabase = createClient(supabaseUrl, supabaseAnonKey);

@Component({
  // selector: 'app-root',
  templateUrl: './paymentverified.view.html',
//   styleUrls: ['./app.component.css']
})
export class PaymentVerifiedComponent implements OnInit {

  
constructor(private router: Router, private http : HttpClient){
}


details : any[] = [];
fareDetails : any[] = [];

totalFare : number = 0;

//https://backend-dypc.onrender.com/setdata

ngOnInit() : void{
  this.loadDetails();
}


Ticket : ticket = new ticket()
outputData ?: any ;

max ?: any;
loadDetails(){
  this.Ticket.name = "Jeyesh";
  this.Ticket.age = 10;
  this.Ticket.tcid = "e0e29014-9e53-4b54-976f-19a05bb93363";
  this.Ticket.amount = 100
  this.Ticket.source = "Kadayur"
  this.Ticket.destination = "Madurai"

  supabase.from('recent_trans').select('*').then((res) => {
    // console.log(res.data)
    this.outputData = res.data
  })


}
deleteRecentData(){
  supabase
      .from('recent_trans') // Replace with actual table name
      .delete().eq('user_id','e0e29014-9e53-4b54-976f-19a05bb93363').then(res => {
        debugger
        this.outputData = null
      })
}



}

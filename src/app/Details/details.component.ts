import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ticket } from './details.model';
import { createClient  } from '@supabase/supabase-js';



const supabaseUrl = 'https://dujuelyrtbutsjxzikpq.supabase.co'; // Replace with your Supabase project URL
 const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1anVlbHlydGJ1dHNqeHppa3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTU0OTEsImV4cCI6MjAxMDM3MTQ5MX0.g8RzXeGSaIaHZF2GYKszVb6-MnA6Q6DTagVbZUsfYBs'; 
//  const supabase = createClient(supabaseUrl, supabaseAnonKey);
const supabase = createClient(process.env.URL, process.env.KEY);



@Component({
  // selector: 'app-root',
  templateUrl: './details.view.html',
//   styleUrls: ['./app.component.css']
})
export class DetailsComponent implements OnInit {

  
constructor(private router: Router, private http : HttpClient){
}

details : any[] = [];
fareDetails : any[] = [];
outputData ?: any ;

TicketDetails : ticket = new ticket();
totalFare : number = 0;

currentUser : any;
userDetails : any;

calculateTotal(){
  this.loadDetails();
  
  let source = this.TicketDetails.source
  let dest = this.TicketDetails.destination 

  this.TicketDetails.amount =  this.getKeyValue(source, dest)
  return this.TicketDetails.amount;
}

getKeyValue(this : DetailsComponent  , key : any, keyTwo : any){
  return (this.fareDetails[key][0][keyTwo]);
}

goToPage(pageName:string){
supabase.from('transactions').insert(this.TicketDetails).then((res) => {
  console.log(res.data)
})
  localStorage.setItem('fare', (this.TicketDetails.amount).toString())
  this.router.navigate([`${pageName}`]);
}

ngOnInit() : void{
  this.loadDetails();
  this.getCredentials()
}

loadDetails(){
  this.http.get("assets/data/details.json").subscribe((res:any) => {
    this.details = res.sodest[0].from;
    this.fareDetails = res.data_short;
  })
}

async getCredentials(){

  this.currentUser = localStorage.getItem('current_user')
  await supabase.from('login_details').select('*').eq('user_id',this.currentUser).then(res => {
    this.userDetails = (res.data)
    this.userDetails = this.userDetails[0]
    console.log(this.userDetails)
    this.TicketDetails.name = this.userDetails.username
  })
}


}

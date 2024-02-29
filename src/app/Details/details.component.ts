import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ticket } from './details.model';

@Component({
  selector: 'app-root',
  templateUrl: './details.view.html',
//   styleUrls: ['./app.component.css']
})
export class DetailsComponent implements OnInit {

  
constructor(private router: Router, private http : HttpClient){
}

details : any[] = [];
fareDetails : any[] = [];

TicketDetails : ticket = new ticket();
totalFare : number = 0;

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
  this.TicketDetails.tcid = Math.floor(100000 + Math.random() * 900000);
  
  let data = ("id="+this.TicketDetails.id) + "&" + ("name=" + this.TicketDetails.name) + "&" + ("age=" + this.TicketDetails.age) + "&" + ("amount=" + this.TicketDetails.amount) + "&" + ("source=" + this.TicketDetails.source) + "&" + ("destination=" + this.TicketDetails.destination) + "&" + ("tcid=" + this.TicketDetails.tcid)

  this.http.post("https://backend-dypc.onrender.com/adddata", JSON.stringify(this.TicketDetails),{
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }).subscribe(
    (res: any) => console.log("Response:", res),
    (error) => console.error("Error:", error)
);
  this.router.navigate([`${pageName}`]);
}




printData(){
  // console.log(this.TicketDetails)


}
//https://backend-dypc.onrender.com/setdata

ngOnInit() : void{
  this.loadDetails();
}

loadDetails(){
  this.http.get("assets/data/details.json").subscribe((res:any) => {
    this.details = res.sodest[0].from;
    this.fareDetails = res.data_short;
  })
}




}

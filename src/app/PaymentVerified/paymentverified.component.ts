import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ticket } from './details.model';

@Component({
  selector: 'app-root',
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

loadDetails(){
  this.http.get("https://backend-dypc.onrender.com/getdata",{
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'access-control-allow-origin' : '*',
      'access-control-allow-headers' : '*'
    })
  }).subscribe((data : any) => {
    console.log(data)
  })
}




}

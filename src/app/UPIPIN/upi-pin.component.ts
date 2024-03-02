import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { createClient  } from '@supabase/supabase-js';


const supabaseUrl = 'https://dujuelyrtbutsjxzikpq.supabase.co'; // Replace with your Supabase project URL
 const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1anVlbHlydGJ1dHNqeHppa3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTU0OTEsImV4cCI6MjAxMDM3MTQ5MX0.g8RzXeGSaIaHZF2GYKszVb6-MnA6Q6DTagVbZUsfYBs'; 
//  const supabase = createClient(supabaseUrl, supabaseAnonKey);
const supabase = createClient(process.env.URL, process.env.KEY);



@Component({
  templateUrl: './upi-pin.view.html',
//   styleUrls: ['./app.component.css']
})
export class UPIPaymentPinComponent {
  
  upiPin ?: number ;
  origPin ?: any

  constructor(private router: Router){
  }
  
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  async checkPin(){
    let user_id = localStorage.getItem('current_user')
    let a;
    await supabase
    .from('login_details')
    .select("pin")
    .eq('user_id', user_id)
    .then(res => {
      a = res.data;
      if(a!=null)
      {
        this.origPin = (a[0])
      }
    })

    let val : number = +this.origPin.pin

    if(val == this.upiPin){
      console.log("Yes Right");
      this.detectAmount()
      this.goToPage('payment-verified')
    }
    else{
      alert("Wrong Pin")
      this.upiPin = 0 
    }

  }

  async detectAmount(){
    let user_id = localStorage.getItem('current_user')
    let balance = Number(localStorage.getItem('fare'))
    let tempBalance : any

    //Get Existing Balance
    await supabase
      .from('login_details').select('balance').eq('user_id',user_id).then(res => {
        tempBalance = res.data
        tempBalance = tempBalance[0].balance
      })
    

    //Update Balance
    if( balance != null && balance <= tempBalance){
      await supabase
      .from('login_details')
      .update({ balance: tempBalance-balance })
      .eq('user_id', user_id)

    }else
    {
      alert('Insufficient Funds')      
    }
  }
}

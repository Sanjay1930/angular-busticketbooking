import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createClient  } from '@supabase/supabase-js';
import { pin } from './setPin.model';


const supabaseUrl = 'https://padzmoooavbbkyvqjpjj.supabase.co'; // Replace with your Supabase project URL
 const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhZHptb29vYXZiYmt5dnFqcGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNjAxNzUsImV4cCI6MjAyNDkzNjE3NX0.uhAQbTIv9IOOH-stFHHXQteDed6xZuOWtclMDjWP0zY'; 
 const supabase = createClient(supabaseUrl, supabaseAnonKey);


@Component({
  templateUrl: './set-upi.view.html',
//   styleUrls: ['./app.component.css']
})
export class SetUpiComponent implements OnInit {
  
  upiPin : any ;
  origPin ?: any;
  Pin : pin = new pin()

  ngOnInit(): void {
    
  }
  constructor(private router: Router){
  }
  
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }


  async setPin(){
    let user_id = localStorage.getItem('current_user')

    //Get Existing Pin
    await supabase
      .from('login_details').select('pin').eq('user_id',user_id).then(res => {
        this.upiPin = res.data
        this.upiPin = this.upiPin[0].pin
      })


    //Update Pin
    if( this.upiPin == this.Pin.oldPin ){
      if(this.Pin.newPin == this.Pin.confPin){
        await supabase
        .from('login_details')
        .update({ pin: this.Pin.newPin ,status : 1})
        .eq('user_id', user_id)

        alert('Pin Changed Successfully')
        this.router.navigate(['/'])

      }else{
        console.log("Pins are not same");
      }
      
    }else
    {
      alert('Invalid Old Pin')      
    }
  }
}

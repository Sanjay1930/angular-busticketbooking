import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createClient  } from '@supabase/supabase-js';

const supabaseUrl = 'https://dujuelyrtbutsjxzikpq.supabase.co'; // Replace with your Supabase project URL
 const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1anVlbHlydGJ1dHNqeHppa3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTU0OTEsImV4cCI6MjAxMDM3MTQ5MX0.g8RzXeGSaIaHZF2GYKszVb6-MnA6Q6DTagVbZUsfYBs'; 
 const supabase = createClient(supabaseUrl, supabaseAnonKey);

@Component({
  selector: 'all-details',
  templateUrl: './det.view.html',
//   styleUrls: ['./app.component.css']
})
export class DataComponent implements OnInit {
  
    allDetails : any;
    sno : number = 0;
    constructor(private router: Router){
    }

    ngOnInit(): void {
      this.getAll()
    }

    increment(){
      this.sno += 1;
    }
    goToPage(pageName:string){
      this.router.navigate([`${pageName}`]);
    }

    async getAll(){
        this.allDetails = await supabase.from('transactions').select('*').range(0, 9).then(res => {return res.data})
        console.log(this.allDetails)
    }

}

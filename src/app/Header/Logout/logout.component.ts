import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  templateUrl: './logout.view.html',
//   styleUrls: ['./app.component.css']
})
export class LogoutComponent implements OnInit {

  currentUser : any = localStorage.getItem('current_user');

  constructor(private router:Router){}

  ngOnInit(): void {
    if(this.currentUser){
      localStorage.removeItem('current_user')
      alert('Logged Out')
      localStorage.setItem('logged_out', 'user');
      this.router.navigate(['/'])
    }

  }
  
}

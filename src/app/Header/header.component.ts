import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-comp',
  templateUrl: './header.view.html',
//   styleUrls: ['./app.component.css']
})
export class HeaderComponent implements OnInit{

  currentUser : any
  ngOnInit(): void {
    this.currentUser = localStorage.getItem('current_user');
    
  }
}

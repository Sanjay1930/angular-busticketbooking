import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-comp',
  templateUrl: './footer.view.html',
//   styleUrls: ['./app.component.css']
})
export class FooterComponent implements OnInit{

  currentUser : any = localStorage.getItem('current_user')
  ngOnInit(): void {
  }

}

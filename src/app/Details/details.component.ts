import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './details.view.html',
//   styleUrls: ['./app.component.css']
})
export class DetailsComponent {

  
constructor(private router: Router){
}

goToPage(pageName:string){
  this.router.navigate([`${pageName}`]);
}

}

import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  templateUrl: './lastpage.view.html',
//   styleUrls: ['./app.component.css']
})
export class LastPageComponent implements OnInit {
   
  data : any;
  imageUrl : any;

  uls : any;
constructor(private router: Router, private route : ActivatedRoute, private http : HttpClient){
}

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.data = params;
    localStorage.setItem('tid',this.data.tcid)
  })

  this.showAndDeleteImage("https://quickchart.io/qr?text="+JSON.stringify(this.data))
}

goToPage(pageName:string){
  this.router.navigate([`${pageName}`]);
}


async showAndDeleteImage(url: string) {
  try {
    const observable = this.http.get(url, { responseType: 'blob' });

    observable.subscribe(
      (response) => {

        const blob = new Blob([response], { type: response.type });
        console.log("Value : ", (response))

        const uls = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = uls;
        link.download = "1.jpg"
        link.click()
        console.log("Filename", url)

        // this.displayImage(blob); 
        const reader = new FileReader();
        reader.onloadend = () => {
          this.imageUrl = reader.result as string; // Set the image URL
        };
        reader.readAsDataURL(response);
        // this.removeImageFromDisplay(); Implement removal logic (see below)
      }
    );
  } catch (error) {
    console.error('Error:', error);
    // Handle errors appropriately
  }
}

  

}

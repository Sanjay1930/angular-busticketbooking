import { Component, ElementRef } from '@angular/core';

@Component({
  templateUrl: './paymentmethod.view.html',
//   styleUrls: ['./app.component.css']
})
export class PaymentMethodComponent {

  netBanking(){
    window.location.href = window.location.origin + '/net-banking'
  }

  upiPayment(){
    window.location.href = window.location.origin + '/upi-payment'
  }
}

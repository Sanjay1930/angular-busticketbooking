import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './MainContent/main.component';
import { DetailsComponent } from './Details/details.component';
import { PaymentMethodComponent } from './PaymentMethod/paymentmethod.component';
import { NetBankingComponent } from './NetBanking/netbanking.component';
import { AdminLoginComponent } from './AdminLogin/admin.component';
import { UPIPaymentComponent } from './UPI/upi.component';
import { PaymentVerifiedComponent } from './PaymentVerified/paymentverified.component';
import { LastPageComponent } from './LastPage/lastpage.component';


const routes: Routes = [

  {path : '', component : MainComponent},
  {path : 'details', component : DetailsComponent},
  {path : 'payment_method', component : PaymentMethodComponent},
  {path : 'net-banking', component : NetBankingComponent},
  {path : 'login', component : AdminLoginComponent},
  {path : 'upi-payment', component : UPIPaymentComponent},
  {path : 'payment-verified', component : PaymentVerifiedComponent},
  {path : 'lastpage', component : LastPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { MainComponent } from './MainContent/main.component';
import { FooterComponent } from './Footer/footer.component';
import { DetailsComponent } from './Details/details.component';
import { PaymentMethodComponent } from './PaymentMethod/paymentmethod.component';
import { NetBankingComponent } from './NetBanking/netbanking.component';
import { AdminLoginComponent } from './AdminLogin/admin.component';
import { UPIPaymentComponent } from './UPI/upi.component';
import { PaymentVerifiedComponent } from './PaymentVerified/paymentverified.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { DataComponent } from './AllDetails/det.component';
import { LastPageComponent } from './LastPage/lastpage.component';
import { UPIPaymentPinComponent } from './UPIPIN/upi-pin.component';
import { User } from './UserLogin/user.model';
import { UserLoginComponent } from './UserLogin/userlogin.component';
import { PaymentConfirmationComponent } from './PaymentConfirmation/payment_conf.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    DetailsComponent,
    PaymentMethodComponent,
    NetBankingComponent,
    AdminLoginComponent,
    UPIPaymentComponent,
    PaymentVerifiedComponent,
    DataComponent,
    LastPageComponent,
    UPIPaymentPinComponent,
    UserLoginComponent,
    PaymentConfirmationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // AngularFirestoreModule,
    // AngularFireModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

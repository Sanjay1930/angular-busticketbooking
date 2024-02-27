import { NgModule } from '@angular/core';
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
    PaymentVerifiedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

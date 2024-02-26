import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './MainContent/main.component';
import { DetailsComponent } from './Details/details.component';

const routes: Routes = [

  {path : '', component : MainComponent},
  {path : 'details', component : DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

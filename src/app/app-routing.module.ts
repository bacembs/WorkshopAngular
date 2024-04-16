import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ApartmentComponent } from './apartment/apartment.component';

const routes: Routes = [
  {path:'home',component:ResidencesComponent},
  {path:'addResidence',component:FormResidenceComponent},
  {path:'apartments/:residenceId', component:ApartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

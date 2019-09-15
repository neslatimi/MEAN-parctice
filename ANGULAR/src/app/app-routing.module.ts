import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './page/employees/employees.component';
import { HomeComponent } from './page/home/home.component';
import { NewComponent } from './page/new/new.component';
import { EditComponent } from './page/edit/edit.component';
import { DetailsComponent } from './page/details/details.component';


const routes: Routes = [
  {path:'employees', component:EmployeesComponent},
  {path:'employees/new', component:NewComponent},
  {path:'employees/edit/:id', component:EditComponent},
  {path:'employees/details/:id', component:DetailsComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

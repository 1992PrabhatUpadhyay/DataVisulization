import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DataviewComponent } from './dataview/dataview.component';
import { EmployeesComponent } from './employees/employees.component';
import { GroupComponent } from './group/group.component';
import { InactiveuserComponent } from './inactiveuser/inactiveuser.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [ {path:"view",component:ViewComponent},
{path:"emp",component:EmployeesComponent} ,
{path:"customer",component:CustomerComponent},
{path:"group",component:GroupComponent},
{path:"inactiveuser",component:InactiveuserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

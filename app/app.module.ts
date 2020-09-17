import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataviewComponent } from './dataview/dataview.component';
import { ViewComponent } from './view/view.component';
import { EmployeesComponent } from './employees/employees.component';
import { CustomerComponent } from './customer/customer.component';
import { GroupComponent } from './group/group.component';
import { InactiveuserComponent } from './inactiveuser/inactiveuser.component';

@NgModule({
  declarations: [
    AppComponent,
    DataviewComponent,
    ViewComponent,
    EmployeesComponent,
    CustomerComponent,
    GroupComponent,
    InactiveuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

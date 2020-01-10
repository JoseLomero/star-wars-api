import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule,
    NgbModule,
  ]
})
export class UsersModule { }

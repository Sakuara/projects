import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { UserComponent } from './user.component';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    SharedModule
  ]
})
export class UserModule { }

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwError } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors';
import { JwtService } from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpTokenInterceptor,multi:true},
    JwtService
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule:CoreModule){
    if(parentModule) {
      throwError('core module has exited');
    }
  }
}

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

const MODULES = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule,
];
const ThirdLibraryModule:any[] = [
  ...SHARED_ZORRO_MODULES,
];
const COMPONENTS:any[] = [
  
];
const PIPES:any[] = [
  
];
const DIRECTIVES:any[] = [

];


@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [
    ...MODULES,
    ...ThirdLibraryModule,
  ],
  exports: [
    ...MODULES,
    ...ThirdLibraryModule,
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ]
})
export class SharedModule { }
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SHARED_MATERIAL_MODULE} from './shared.material.module';
import { RouterModule } from '@angular/router';
const MODULES:any[] = [
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  RouterModule
];

const THIRD_MODULES:any[] = [
  SHARED_MATERIAL_MODULE
]

const PIPES: any[] = [

];

const DIRECTIVES:any[] = [

];

@NgModule({
  declarations: [],
  imports: [
    ...MODULES,
    ...THIRD_MODULES,
  ],
  exports: [
    ...MODULES,
    ...THIRD_MODULES,
    ...PIPES,
    ...DIRECTIVES
  ]
})
export class SharedModule { }

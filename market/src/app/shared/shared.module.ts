import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SHARED_MATERIAL_MODULE} from './shared.material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
const MODULES:any[] = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  RouterModule
];

const THIRD_MODULES:any[] = [
  SHARED_MATERIAL_MODULE,
  FlexLayoutModule
]

const COMPONENTS:any[] = [
  
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
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutsModule } from './components/layouts/layouts.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutsModule
  ]
})
export class SharedModule { }

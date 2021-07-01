import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NebularExampleComponent } from './nebular-example/nebular-example.component';
import { MainComponent } from './nebular-example/main/main.component';


@NgModule({
  declarations: [NebularExampleComponent, MainComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

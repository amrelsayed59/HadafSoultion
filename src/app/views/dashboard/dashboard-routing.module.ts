import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NebularExampleComponent } from './nebular-example/nebular-example.component';


const routes: Routes = [
  {
    path: "",
    component: NebularExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

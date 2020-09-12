import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersAddComponent } from "./users-add/users-add.component";
import { UsersEditComponent } from "./users-edit/users-edit.component";
import { UsersListComponent } from "./users-list/users-list.component";

const routes: Routes = [
  {
    path: "",
    component: UsersListComponent,
  },
  {
    path: "add-user",
    component: UsersAddComponent,
  },
  {
    path: "edit-user/:id",
    component: UsersEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

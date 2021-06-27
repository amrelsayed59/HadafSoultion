import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./shared/components/layouts/admin-layout/admin-layout.component";
import { UserLayoutComponent } from "./shared/components/layouts/user-layout/user-layout.component";
import { NotfoundComponent } from "./shared/components/notfound/notfound.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/admin",
    pathMatch: "full",
  },

  // {
  //   path: "",
  //   component: AdminLayoutComponent,
  //   children: [
  //     {
  //       path: "posts",
  //       loadChildren: () =>
  //         import("./views/posts/posts.module").then(m => m.PostsModule)
  //     }
  //   ]
  // },

  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "posts",
        loadChildren: () =>
          import("./views/posts/posts.module").then((m) => m.PostsModule),
      },
      {
        path: "users",
        loadChildren: () =>
          import("./views/users/users.module").then((m) => m.UsersModule),
      },
    ],
  },
  {
    path: "user",
    component: UserLayoutComponent,
    children:[
      {
        path: 'notes',
        loadChildren: () => import("./views/notes/notes/notes.module").then(m => m.NotesModule)
      }
    ]
  },

  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostShowComponent } from './post-show/post-show.component';
import { PostEditComponent } from './post-edit/post-edit.component';


const routes: Routes = [
  {
    path: "",
    component: PostListComponent
  },
  {
    path: "show/:id",
    component: PostShowComponent
  },
  {
    path: "edit/:id",
    component: PostEditComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }

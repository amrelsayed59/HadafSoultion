import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostShowComponent } from './post-show/post-show.component';


const routes: Routes = [
  {
    path: "",
    component: PostListComponent
  },
  {
    path: "show/:id",
    component: PostShowComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }

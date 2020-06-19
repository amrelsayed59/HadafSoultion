import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostShowComponent } from './post-show/post-show.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';


@NgModule({
  declarations: [PostShowComponent, PostListComponent, PostEditComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ]
})
export class PostsModule { }

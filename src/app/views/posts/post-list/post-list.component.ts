import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: any = []
  constructor(
    private _postsService: PostsService
  ) { }

  getAll() {
    this._postsService.getAll().subscribe(res => {
      this.posts = res
      console.log( this.posts)
    })
  }

  ngOnInit(): void {
    this.getAll();
  }

}

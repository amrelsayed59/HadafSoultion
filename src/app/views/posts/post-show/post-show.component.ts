import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";



@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.scss']
})
export class PostShowComponent implements OnInit {
  itemId;
  itemDetails :any = {
    id: '',
    title: '',
    description: ''
  }

  constructor(
    private _PostsService:PostsService,
    private _Route: ActivatedRoute,
    private _Router: Router,
    private _Toaster: ToastrService,
    private _ModelService: NgbModal

  ) { }

  open(content) {
    this._ModelService.open(content);
  }

  showPost(id) {
    this._PostsService.showPost(id).subscribe(res => {
      this.itemDetails = res;
      console.log(this.itemDetails = res)
   })
  }

  deletePost(model, id) {
    this._ModelService.open(model).result.then(
      reslut => {
        this._PostsService.deletePost(id).subscribe(
          res => {
            this._Toaster.success("Item deleted Successfuly", "Success", {
              timeOut: 1500,
              closeButton: true,
              progressBar: true
            });
            setTimeout(() => {
              this._Router.navigate(["admin/posts"]);
            }, 1500)
          },
          err => {
            this._Toaster.error(err.statusText, "Error", {
              timeOut: 1500,
              closeButton: true,
              progressBar: true
            });
            console.log(err);
          }
        );
      }
    )
    

}




  ngOnInit(): void {

    //Get Item Data id
    this._Route.params.subscribe(params => {
      this.showPost(params.id)
     })
    
  }

}

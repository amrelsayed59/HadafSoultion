import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PostsService } from "src/app/core/services/posts.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import {itemDetails} from './index'
@Component({
  selector: "app-post-edit",
  templateUrl: "./post-edit.component.html",
  styleUrls: ["./post-edit.component.scss"],
})
export class PostEditComponent implements OnInit {
  itemDetails: any = {
    id: "",
    title: "",
    description: "",
  };


  constructor(
    private _Router: Router,
    private _PostsService: PostsService,
    private _Route: ActivatedRoute,
    private _Toaster: ToastrService
  ) {}

  //FormGroup
  postUpdateForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
  }); 

  //SubmitedMethod
  updatePost(id) {
    //getValues
    let data = this.postUpdateForm.value;

    this._PostsService.updatePost(data, id).subscribe(res => {
        this._Toaster.success("Item Updated Successfuly", "Success", {
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
    )

  }

  // to access inputs (HandleValidations)
  get f() {
    return this.postUpdateForm.controls;
  }

  //get selected post
  editPost(id) {
    this._PostsService.showPost(id).subscribe((res) => {
      this.itemDetails = res;
      console.log((this.itemDetails = res));
    });
  }

  ngOnInit(): void {
    //Get Item Data id
    this._Route.params.subscribe((params) => {
      this.editPost(params.id);
    });
  }
}

import { Injectable } from '@angular/core';
import { environment as env } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private _HttpClient: HttpClient
  ) { }

  //Get All Posts
  getAll(): Observable<any> {
    return this._HttpClient.get(`${env.apiUrl}/posts`);
  }

}

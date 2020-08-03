import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor() { }

  //Handling error from serverSide & Client Side
  logError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      //ClientSide
      console.log('Client Side Error', error)
    } else {
      //ServerSide
      console.log('Server Side Error', error)
      alert('Server Side Error')
    }
    return throwError('There is something went wrong')
  }


}

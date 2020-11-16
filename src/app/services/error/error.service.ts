import { Injectable } from '@angular/core';
import { IError } from '@interfaces';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  handleError(error){
    let errorObject: IError = {
      status: 501,
      message: 'Unknown Error'
    }
    if(error){
      errorObject.status = error.status;
      errorObject.message = errorObject.status == 404 ? 'Did not find anything' : 'An Error Occured';
    }
    return errorObject;
  }
}

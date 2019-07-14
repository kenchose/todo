import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  // serviceGetTasks(){
  //   return this._http.get('/tasks');
  // }

  newSubmission(newTask){
    return this._http.post('/tasks', newTask);
  }
}

import { Injectable, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { Task } from './task.model'
// import { TasksComponent } from './components/tasks/tasks.component';
// import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class HttpService {
  private _refreshCount$ = new Subject<void>();
  // private serviceUrl = "https://jsonplaceholder.typicode.com/users"
  private serviceUrl = "http://localhost:8000/tasks";
  constructor(private _http: HttpClient) {}
  
  get refreshCount$(){
    return this._refreshCount$;
  }

  getAllTasks() {
    return this._http.get(this.serviceUrl);
  }

  createTask(newTask: any) {
    return this._http.post("/tasks/new", newTask)
    .pipe(
      tap(() => {
        this._refreshCount$.next()
      })
    )
  }

  getDayTasks() {
    return this._http.get("/tasks/myday");
  }

  oneMyDay(id: Number) {
    return this._http.get("/tasks/" + id);
  }

  getImportantTasks() {
    return this._http.get("/tasks/important");
  }

  oneTask(id: Number) {
    return this._http.get("/tasks/task/" + id);
  }

  oneImportantTask(id: Number) {
    return this._http.get("/tasks/important/" + id);
  }

  editTask(task: any) {
    return this._http.put("/tasks/edit/" + task._id, task);
  }

  deleteTask(id: Number) {
    return this._http.delete("/tasks/delete/" + id)
    .pipe(
      tap(() => {
        this._refreshCount$.next()
      })
    )
  }

  getImportCount(){
    return this._http.get("/tasks/count/important");
  }

  getMyDayCount(){
    return this._http.get("/tasks/count/myday");
  }

  getTaskCount(){
    return this._http.get("/tasks/count/tasks");
  }
}

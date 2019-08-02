import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { Observable } from 'rxjs';
// import { Task } from './task.model'
// import { TasksComponent } from './components/tasks/tasks.component';
// import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class HttpService {
  private serviceUrl = "http://localhost:8000/tasks";
  // private serviceUrl = "https://jsonplaceholder.typicode.com/users"
  constructor(private _http: HttpClient) {}

  getAllTasks() {
    return this._http.get(this.serviceUrl);
  }

  createTask(newTask: any) {
    return this._http.post("/tasks/new", newTask);
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
    return this._http.delete("/tasks/delete/" + id);
  }
}

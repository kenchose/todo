import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks:String[];
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(){
    let obs = this._httpService.serviceGetTasks();
    obs.subscribe(data => {
      console.log("Got all tasks" + data);
    })
  }
}

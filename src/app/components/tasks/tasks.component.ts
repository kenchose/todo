import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks:Object[] = [];
  checked = false;
  anyTask:any
  editTask:any
  editing:boolean;
  constructor(
    private _httpService:HttpService,
    private _router:Router,
    private _route:ActivatedRoute
    ) { this.editing=false}
  ngOnInit() {
    this.getTasks();
  }

  getTasks(){
    this._httpService.getAllTasks()
      .subscribe(data => {
        console.log(data);
        this.tasks = data['tasks']
      })
  }

  removeTask(id){
    this._httpService.deleteTask(id)
    .subscribe(data => {
      this.getTasks();
    })
  }
}

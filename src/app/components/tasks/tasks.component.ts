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
  countImport:any;
  countMyDay:any;
  countTasks:any

  constructor(
    private _httpService:HttpService,
    private _router:Router,
    private _route:ActivatedRoute
    ) { this.editing=false}
  ngOnInit() {
    this.getTasks();
    this.getCountImportant();
    this.getCountMyDay();
    this.getCountTasks();
  }

  getTasks(){
    this._httpService.getAllTasks()
    .subscribe(data => this.tasks = data['tasks'])
  }

  getCountImportant(){
    this._httpService.getImportCount()
    .subscribe(count => this.countImport = count)
  }

  getCountMyDay(){
    this._httpService.getMyDayCount()
    .subscribe(count => this.countMyDay = count)
  }

  getCountTasks(){
    this._httpService.getTaskCount()
    .subscribe(count => this.countTasks = count)
  }


  removeTask(id){
    this._httpService.deleteTask(id)
    .subscribe(data => this.getTasks())
  }
}

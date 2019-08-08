import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks:Object[] = [];
  anyTask:any
  editTask:any
  editing:boolean;
  countImport:any;
  countMyDay:any;
  countTasks:any;
  thisNewTask:boolean
  switch:boolean;

  constructor(
    private _httpService:HttpService,
    private _router:Router,
    private _route:ActivatedRoute
    ) { this.editing=false}
  ngOnInit() {
    this._httpService.refreshCount$.subscribe(() => {
      this.getCountTasks();
      this.getCountImportant();
      this.getCountMyDay();  
    })
    this.getTasks();
  }
  
  keepClass(event){
    console.log(event)
    // this._httpService.keepingClass.subscribe((event) => this.switch = event)
  }
  getTasks(){
    this._httpService.getAllTasks().subscribe(data => {this.tasks = data['tasks']; console.log(this.tasks.length)});
  }

  getCountImportant(){
    this._httpService.getImportCount().subscribe(count => this.countImport = count);
  }

  getCountMyDay(){
    this._httpService.getMyDayCount().subscribe(count => this.countMyDay = count);
  }

  getCountTasks(){
    this._httpService.getTaskCount().subscribe(count => this.countTasks = count);
  }

  removeTask(id){
    this._httpService.deleteTask(id).subscribe(() => this.getTasks());
  }
}

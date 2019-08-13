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
  isChecked:any;

  constructor(
    private _httpService:HttpService,
    ) { this.editing=false}
  ngOnInit() {
    this._httpService.refreshCount$.subscribe(() => {
      this.getCountTasks();
      this.getCountImportant();
      this.getCountMyDay();  
    })
    this.getTasks();
  }
  
  getTasks(){
    this._httpService.getAllTasks().subscribe(data => this.tasks = data['tasks']);
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

  onChange(task){
    this.switch = task.complete;
    console.log(this.switch, task.complete, task._id)
    this._httpService.taskComplete(task).subscribe(() => this.getTasks())
  }
}

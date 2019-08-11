import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  minDate = new Date();
  hideRequired="true"
  newTask:any
  selectedOption:any;
  tasks:Object[] = []
  countImport:any;
  countMyDay:any;
  countTasks:any;
  thisNewTask:boolean

  constructor(
    private _httpService:HttpService,
    private _router:Router
    ) { 
    this.selectedOption="task"
    this.newTask = {title:'', note:'', dueDate:'', priLevel:this.selectedOption}
  }


  ngOnInit() {
    this.selectedOption="task"
    this.getTasks();
  }

  getTasks(){
    this._httpService.getAllTasks().subscribe(data => {this.tasks = data['tasks']});
  }

  createNewTask(){
    this._httpService.createTask(this.newTask).subscribe(data => {this._router.navigate(['/task'])});
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

  resetForm(form:NgForm){
    form.resetForm();
  }
}
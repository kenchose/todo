import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
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

  constructor(
    private _httpService:HttpService,
    private _router:Router
    ) { 
    this.newTask = {title:'', note:'', dueDate:'', priLevel:''}
  }

  ngOnInit() {
  }

  createNewTask(){
    this._httpService.createTask(this.newTask)
      .subscribe(data => {
        console.log(data);
        this._router.navigate(['/alltasks'])
    });
  }

  resetForm(form:NgForm){
    form.resetForm();
  }
}
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  myForm:FormGroup;
  myControl = new FormControl()
  tasks:String[];
  minDate = new Date();
  constructor(private _httpService:HttpService, private _fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      title:'',
      description:'',
      dueDate:'',
      complete:false,
      importance:''
    })
    this.myForm.valueChanges.subscribe(console.log)
    this.getTasks();
  }

  getTasks(){
    let obs = this._httpService.serviceGetTasks();
    obs.subscribe(data => {
      console.log("Got all tasks" + data);
    })
  }
}

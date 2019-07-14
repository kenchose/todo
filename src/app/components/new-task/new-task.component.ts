import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  myForm:FormGroup;
  // newTask:any
  myControl = new FormControl();
  minDate = new Date();
  selectedValue = "Task"
  hideRequired="true"
  // constructor(private _httpService:HttpService) { 
  //   this.newTask = {title:'', note:'', dueDate:'', importance:[this.selectedValue]}
  // }
  constructor(private _httpService:HttpService, private _fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      title:['', [
        Validators.required
      ]],
      note:'',
      dueDate:['', [
        Validators.required
      ]],
      priorityLevel:[[this.selectedValue], [
        Validators.required
      ]]
    });
    // this.myForm.valueChanges.subscribe(console.log);
  }
  
  get title(){
    return this.myForm.get('title')
  }
  get note(){
    return this.myForm.get('note')
  }
  get dueDate(){
    return this.myForm.get('dueDate')
  }
  get importance(){
    return this.myForm.get('importance')
  }

  onSubmit(){
    let obs = this._httpService.newSubmission(this.myForm.value);
    obs.subscribe(data => 
      console.log("Success" + data)
    )
  }
  // componentCreate(){
  //   console.log(this.newTask);
  //   let obs = this._httpService.serviceCreate(this.myForm);
  //   obs.subscribe(data => {
  //     console.log(data);
  //   })
  // }
}

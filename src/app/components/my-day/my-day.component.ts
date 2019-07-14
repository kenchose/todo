import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-day',
  templateUrl: './my-day.component.html',
  styleUrls: ['./my-day.component.scss']
})
export class MyDayComponent implements OnInit {

  myForm:FormGroup;
  myControl = new FormControl();
  tasks:String[];
  minDate = new Date();
  constructor(private _httpService:HttpService, private _fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      title:'',
      description:'',
      dueDate:'',
      importance:''
    })
    this.myForm.valueChanges.subscribe(console.log);
    // this.getDayTask();

  }

  // getDayTask(){
  //   let obs = this._httpService.serviceMyDay();
  //   obs.subscribe(data => {
  //     console.log(data);
  //   })
  // }
}

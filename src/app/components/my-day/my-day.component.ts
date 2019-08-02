import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';

@Component({
  selector: 'my-day',
  templateUrl: './my-day.component.html',
  styleUrls: ['./my-day.component.scss']
})
export class MyDayComponent implements OnInit {

  dayTasks:Object[] = [];
  minDate = new Date();

  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this.myDayTasks();
  }

  myDayTasks(){
    this._httpService.getDayTasks()
    .subscribe(data => {
      this.dayTasks = data['dayTasks'];
    })
  }

  getDayTask(myDay){
    return this._httpService.oneMyDay(myDay);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';

@Component({
  selector: 'my-day',
  templateUrl: './my-day.component.html',
  styleUrls: ['./my-day.component.scss']
})
export class MyDayComponent implements OnInit {

  dayTasks:Object[]=[];
  minDate = new Date().toISOString().slice(0,10); //today's date
  countTasks:any;
  countMyDay:any;

  constructor(private _httpService:HttpService) { 
  }

  ngOnInit() {
    this._httpService.refreshCount$.subscribe(() => {
      this.getCountTasks();
      this.getCountMyDay();  
    })
    this.myDayTasks();
  }

  myDayTasks(){
    this._httpService.getDayTasks().subscribe(data => this.dayTasks = data['dayTasks']);
  }

  getDayTask(myDay){
    return this._httpService.oneMyDay(myDay);
  }

  removeTask(id) {
    this._httpService.deleteTask(id).subscribe(() => this.myDayTasks());
  }

  getCountMyDay(){
    this._httpService.getMyDayCount().subscribe(count => this.countMyDay = count);
  }

  getCountTasks(){
    this._httpService.getTaskCount().subscribe(count => this.countTasks = count);
  }
}

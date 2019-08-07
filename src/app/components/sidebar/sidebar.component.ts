import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../../http.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  countImport:any;
  countMyDay:any;
  countTasks:any;

  constructor(
    private _httpService:HttpService) { }

  ngOnInit() {
    this._httpService.refreshCount$.subscribe(() => {
      this.getCountTasks();
      this.getCountImportant();
      this.getCountMyDay();  
    })
    this.getCountImportant();
    this.getCountMyDay();
    this.getCountTasks();
  }

  getCountImportant(){
    this._httpService.getImportCount().subscribe(count => this.countImport = count);
  }

  getCountMyDay(){
    let obs = this._httpService.getMyDayCount().subscribe(count => this.countMyDay = count)
  }

  getCountTasks(){
    this._httpService.getTaskCount().subscribe(count => this.countTasks = count)
  }
}

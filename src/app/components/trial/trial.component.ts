// import { Component, OnInit, ViewChild } from '@angular/core';
// import { HttpService } from './../../http.service';
// import { Observable } from 'rxjs';
// import { DataSource } from '@angular/cdk/collections';
// import { MatTableDataSource, MatPaginator, MatSort, MatSortable, MatTable } from '@angular/material';
// import { Task } from './../../task.model';
// import { map } from 'rxjs/operators';


// @Component({
//   selector: 'trial',
//   templateUrl: './trial.component.html',
//   styleUrls: ['./trial.component.scss']
// })
// export class TrialComponent implements OnInit {
//   dataSource$: Observable<Task[]>;
//   displayedColumns = ['title', 'note'];
//   // tasks:any[]=[]

//   constructor(private _httpService:HttpService) { }

//   ngOnInit() {
//     this.dataSource$ = this.getTasks();
//   }

//   getTasks(){
//     return this._httpService.getAllTasks();
//     // return this._httpService.getAllTasks().pipe(
//     //   map((res) => res.tasks));
//   }

  // getTasks(){
  //   this._httpService.getAllTasks()
  //   .subscribe(data => {
  //     this.tasks = data['task'];
  //     console.log("print data from tasks", this.tasks);
  //   })
  // }

  // getTasks(){
  //   return this._httpService.getAllTasks();
  // }
// }


// import { Component, OnInit, ViewChild } from '@angular/core';
// import { HttpService } from './../../http.service';
// import { Observable } from 'rxjs';
// import { DataSource } from '@angular/cdk/collections';
// import { MatTableDataSource, MatPaginator, MatSort, MatSortable, MatTable } from '@angular/material';
// import { Task } from './../../task.model';


// @Component({
//   selector: 'trial',
//   templateUrl: './trial.component.html',
//   styleUrls: ['./trial.component.scss']
// })
// export class TrialComponent implements OnInit {
//   dataSource = new MatTableDataSource<Task>();
//   displayedColumns = ['title', 'note'];

//   constructor(private _httpService:HttpService) { }

//   ngOnInit() {
//     this.getTask();
//   }

//   getTask(){
//     this._httpService.getAllTasks().subscribe(data => {
//       this.dataSource.data = data;
//       // console.log("Datasource: ", data);
//     }, err => {console.log(err)
//       // console.log("dataSource from this.datasource.data", this.dataSource.data)
//     })
//   }
// }







import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from './../../http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator, MatSort, MatSortable, MatTable } from '@angular/material';
import { Task } from './../../task.model';


@Component({
  selector: 'trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {
  // @ViewChild('MatTableDataSource', {static:false}) dataTable: MatTable<any>;
  // displayedColumns = ['title', 'note'];
  // dataSource = new TasksDataSource(this._httpService);

  constructor(private _httpService:HttpService) { }

  ngOnInit() {
  }

}


// export class TasksDataSource extends DataSource<any>{
//   constructor(private _httpService:HttpService) {
//     super();
//   }

//   connect():Observable<Task[]> {
//     return this._httpService.getAllTasks().pipe(map((res) => res.tasks));
//   }

//   disconnect(){}
// }







// import { Component, OnInit, ViewChild } from '@angular/core';
// import { HttpService } from './../../http.service';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { DataSource } from '@angular/cdk/collections';
// import { MatTableDataSource, MatPaginator, MatSort, MatSortable, MatTable } from '@angular/material';
// import { Task } from './../../task.model';


// @Component({
//   selector: 'trial',
//   templateUrl: './trial.component.html',
//   styleUrls: ['./trial.component.scss']
// })
// export class TrialComponent implements OnInit {
//   // @ViewChild('MatTableDataSource', {static:false}) dataTable: MatTable<any>;
//   displayedColumns = ['title', 'note'];
//   dataSource = new TasksDataSource(this._httpService);

//   constructor(private _httpService:HttpService) { }

//   ngOnInit() {
//   }

// }


// export class TasksDataSource extends DataSource<any>{
//   constructor(private _httpService:HttpService) {
//     super();
//   }

//   connect():Observable<Task[]> {
//     return this._httpService.getAllTasks();
//   }

//   disconnect(){}
// }









// import { Component, OnInit, ViewChild } from '@angular/core';
// import { HttpService } from './../../http.service';
// import { Observable } from 'rxjs';
// import { DataSource } from '@angular/cdk/collections';
// import { MatTableDataSource, MatPaginator, MatSort, MatSortable, MatTable } from '@angular/material';
// import { Task } from './../../task.model';


// @Component({
//   selector: 'trial',
//   templateUrl: './trial.component.html',
//   styleUrls: ['./trial.component.scss']
// })
// export class TrialComponent implements OnInit {
//   // @ViewChild('MatTableDataSource', {static:false}) dataTable: MatTable<any>;
//   displayedColumns = ['title', 'note'];
//   dataSource = new MatTableDataSource<Task>();
//   tasks:Object;

//   constructor(private _httpService:HttpService) { }

//   ngOnInit() {
//     // this.getAllTasks();
//     this.oldSchool();
//     // console.log("new data", this.dataSource)
//     // console.log(this.dataSource.data, "new datasourde")
//   }

//   // getAllTasks(){
//   //   this._httpService.getTasks().subscribe( data => {
//   //     this.tasks = data;
//   //     console.log("to get all tasks", this.tasks)
//   //   })
//   // }
//   oldSchool(){
//     this._httpService.getTasks().subscribe(data => {
//       if(!data) {
//         return;
//       }
//       this.tasks = data
//       this.dataSource = new MatTableDataSource<Task>(data);
//       console.log("This is the DataSource: " + this.dataSource, data)
//     })
//   }
// }


// export class TasksDataSource extends DataSource<any>{
//   constructor(private _httpService:HttpService) {
//     super();
//   }

//   connect():Observable<Task[]> {
//     return this._httpService.getTasks();
//   }

//   disconnect(){}
// }
import { Component, OnInit, getDebugNode } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: String
  editTask:any;
  minDate = new Date();

  hideRequired="true";
  constructor(
    private _httpService:HttpService,
    private _router:Router,
    private _route:ActivatedRoute,
    ) { 
      this.editTask = {title:'', note:'', dueDate:'', priLevel:''}
    }
    ngOnInit() {
      this.getOneTask();
    }
    
  getOneTask(){
    this._route.params.subscribe((params:Params) => {
      this._httpService.oneTask(params['id'])
      .subscribe(data => {
        this.editTask = data
      })
    })
  }

  resetForm(form:NgForm){
    form.resetForm();
  }

  taskEdit(){
    this._httpService.editTask(this.editTask).subscribe(data => this._router.navigate(['/alltasks']))
  }
}

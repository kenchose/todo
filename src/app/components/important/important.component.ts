import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../../http.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-important",
  templateUrl: "./important.component.html",
  styleUrls: ["./important.component.scss"]
})
export class ImportantComponent implements OnInit {
  importantTask: Object[] = [];
  countImport:any;
  countTasks:any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this._httpService.refreshCount$.subscribe(() => {
      this.getCountTasks();
      this.getCountImportant();
    })
    this.allImportantTasks();
  }

  allImportantTasks() {
    this._httpService.getImportantTasks().subscribe(data => this.importantTask = data["importantTask"]);
  }

  removeTask(id) {
    this._httpService.deleteTask(id).subscribe(() => this.allImportantTasks());
  }

  getCountImportant(){
    this._httpService.getImportCount().subscribe(count => this.countImport = count);
  }

  getCountTasks(){
    this._httpService.getTaskCount().subscribe(count => this.countTasks = count);
  }
}

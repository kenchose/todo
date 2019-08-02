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

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.allImportantTasks();
  }

  allImportantTasks() {
    this._httpService.getImportantTasks().subscribe(data => {
      console.log(data);
      this.importantTask = data["importantTask"];
    });
  }

  removeTask(id) {
    this._httpService.deleteTask(id).subscribe(data => {
      this.allImportantTasks();
    });
  }

  // oneTask(id):Observable<Object>{
  //   return this._httpService.oneImportantTask(id);
  // }
}

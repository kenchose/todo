import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpService } from "./../../http.service";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent {
  countImport: any;
  countMyDay: any;
  countTasks: any;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this._httpService.refreshCount$.subscribe(() => {
      this.getCountTasks();
      this.getCountImportant();
      this.getCountMyDay();
    });
    this.getCountImportant();
    this.getCountMyDay();
    this.getCountTasks();
  }

  getCountImportant() {
    this._httpService
      .getImportCount()
      .subscribe(count => (this.countImport = count));
  }

  getCountMyDay() {
    let obs = this._httpService
      .getMyDayCount()
      .subscribe(count => (this.countMyDay = count));
  }

  getCountTasks() {
    this._httpService
      .getTaskCount()
      .subscribe(count => (this.countTasks = count));
  }
}

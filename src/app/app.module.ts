import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksComponent } from './components/tasks/tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MyDayComponent } from './components/my-day/my-day.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { ImportantComponent } from './components/important/important.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EditComponent } from './components/edit/edit.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    SidebarComponent,
    MyDayComponent,
    NewTaskComponent,
    ImportantComponent,
    NotfoundComponent,
    EditComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

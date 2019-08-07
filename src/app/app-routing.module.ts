import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { MyDayComponent } from './components/my-day/my-day.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ImportantComponent } from './components/important/important.component';
import { NotfoundComponent } from './components/notfound/notfound.component'
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path: 'task', component:TasksComponent},
  {path: 'create', component:NewTaskComponent}, 
  {path: 'myday', component:MyDayComponent},
  {path: 'important', component:ImportantComponent},
  {path: 'edit/:id', component:EditComponent},
  {path:"", pathMatch:"full", redirectTo:"/task"},
  {path: "**", pathMatch:"full", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

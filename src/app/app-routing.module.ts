import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';

const routes: Routes = [
  {path:'taskdetails',component: TaskdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

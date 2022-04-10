import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() task: any;
  TaskDetailsId: number = 0;
  Task: string = "";
  Priority: number = 1;
  Description: string = "";
  By_who: string = "";
  Stage: number = 0;
  PhotoFilePath: string = "";
  TaskDetailsList: any = [];

  ngOnInit(): void { 
    this.loadTaskDetailsList();
  }
  
  addTaskDetails() {
    var val = {
      TaskDetailsId: this.TaskDetailsId,
      Task: this.Task,
      Priority: this.Priority,
      Description: this.Description,
      By_who: this.By_who,
      Stage: this.Stage
    };
    this.service.addTaskDetails(val);
  }
  loadTaskDetailsList() {
    this.service.getTaskDetailsList().subscribe((data: any) => {
      this.TaskDetailsList = data;

      this.TaskDetailsId = this.task.TaskDetailsId;
      this.Task = this.task.Task;
      this.Priority = this.task.Priority;
      this.Description = this.task.Description;
      this.By_who = this.task.By_who;
      this.Stage = this.task.Stage;
    });
  }
}

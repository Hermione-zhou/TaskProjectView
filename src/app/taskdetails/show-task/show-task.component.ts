import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";


@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  constructor(private service: SharedService) { }

  TaskDetailsList: any = [];
  StageOneTaskDetailsList: any = [];
  StageTwoTaskDetailsList: any = [];
  StageThreeTaskDetailsList: any = [];
  ModalTitle: string = "123";
  ActivateAdd: boolean = false;
  task: any;

  TaskProrityFilter: string = "";
  TaskSDetailsListWithoutFilter: any = [];
  FirstTaskSDetailsListWithoutFilter: any = [];
  SecondTaskSDetailsListWithoutFilter: any = [];
  ThirdTaskSDetailsListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshTasksList();
    this.refreshFirstTasksList();
    this.refreshSecondTasksList();
    this.refreshThirdTasksList();

  }
  addClick() {
    this.task = {
      TaskDetailsId: 0,
      Task: "",
      Priority: 1,
      Description: "",
      By_who: "",
      Stage: 0
    }
    this.ModalTitle = "Add Task";
    this.ActivateAdd = true;
  }

  closeClick() {
    this.ActivateAdd = false;
  }

  refreshTasksList() {

    this.service.getTaskDetailsList().subscribe(data => {
      this.TaskDetailsList = data;
      this.TaskSDetailsListWithoutFilter = data;
    });
  }
  refreshFirstTasksList() {
    this.service.getStageOneTaskDetailsList().subscribe(data => {
      this.StageOneTaskDetailsList = data;
      this.FirstTaskSDetailsListWithoutFilter = data;
    });
  }
  refreshSecondTasksList() {
    this.service.getStageTwoTaskDetailsList().subscribe(data => {
      this.StageTwoTaskDetailsList = data;
      this.SecondTaskSDetailsListWithoutFilter = data;
    });
  }
  refreshThirdTasksList() {
    this.service.getStageThreeTaskDetailsList().subscribe(data => {
      this.StageThreeTaskDetailsList = data;
      this.ThirdTaskSDetailsListWithoutFilter = data;
    });
  }
  FilterTask() {
    var TaskProrityFilter = this.TaskProrityFilter;
    this.StageOneTaskDetailsList = this.FirstTaskSDetailsListWithoutFilter.filter(function (el: any) {
      return el.Task.toString().toLowerCase().includes(
        TaskProrityFilter.toString().trim().toLowerCase()
      )
    });
    this.StageTwoTaskDetailsList = this.SecondTaskSDetailsListWithoutFilter.filter(function (el: any) {
      return el.Task.toString().toLowerCase().includes(
        TaskProrityFilter.toString().trim().toLowerCase()
      )
    });
    this.StageThreeTaskDetailsList = this.ThirdTaskSDetailsListWithoutFilter.filter(function (el: any) {
      return el.Task.toString().toLowerCase().includes(
        TaskProrityFilter.toString().trim().toLowerCase()
      )
    });
  }
  sortResult(prop: any, asc: boolean) {
    this.StageOneTaskDetailsList = this.FirstTaskSDetailsListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      }
      else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
    this.StageTwoTaskDetailsList = this.SecondTaskSDetailsListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      }
      else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
    this.StageThreeTaskDetailsList = this.ThirdTaskSDetailsListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      }
      else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

  drop(event: any) {
    moveItemInArray(this.StageOneTaskDetailsList, event.previousIndex, event.currentIndex);
  }
}
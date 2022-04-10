import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://localhost:5000/api";

  constructor(private http:HttpClient) { }

  getTaskDetailsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/TaskDetails');
  }
  getStageOneTaskDetailsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/TaskDetails/GetStage1Tasks');
  }
  getStageTwoTaskDetailsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/TaskDetails/GetStage2Tasks');
  }
  getStageThreeTaskDetailsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/TaskDetails/GetStage3Tasks');
  }
  addTaskDetails(val:any){
    return  this.http.post(this.APIUrl+'/TaskDetails',val);
  }

  UploadPhoto(val:any){
    return  this.http.post(this.APIUrl+'/TaskDetails/SaveFile',val);
  }

  getAllTasks():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/TaskDetails/GetAllTasks');
  }
}

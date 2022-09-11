import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:DashboardService) { }
  employee:any;
  employeeEmpty:any=false;
  dataLoaded:any=false;

  ngOnInit(): void {
    this.service.getEmployees().subscribe((data)=>{
     
        this.employee=data;
        if(this.employee.length>0){
          this.dataLoaded=true;
          this.employeeEmpty=true;
        }else{
          this.dataLoaded=true;
          this.employeeEmpty=false;
        }
        
    })
  }

}

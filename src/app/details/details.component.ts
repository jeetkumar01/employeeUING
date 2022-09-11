import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
employeeDetails:any=[];
  constructor(private route:ActivatedRoute,private service:DetailService) { }

  ngOnInit(): void {
    
    this.service.getEmployeeDetails(this.route.snapshot.params).subscribe(data=>{
  this.employeeDetails=data;
  console.log(this.employeeDetails);
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddOrderService } from './add-order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  uploadForm:any= FormGroup; 
  constructor(private formBuilder: FormBuilder,private service:AddOrderService,private router:Router) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      id:[''],
      fName: [''],
      lName:[''],
      companyName:['']

    });
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append('id', this.uploadForm.get('id').value);
    formData.append('fName', this.uploadForm.get('fName').value);
    formData.append('lName', this.uploadForm.get('lName').value);
    formData.append('companyName', this.uploadForm.get('companyName').value);
    var object:any = {};
    formData.forEach(function(value:any, key:any){
        object[key] = value;
    });
    var json = JSON.stringify(object);
    
    this.service.addOrder(object).subscribe((data)=>{
        this.router.navigate(['/dashboard']);
    })
  
  }


}

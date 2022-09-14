import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddOrderService {

  constructor(private http:HttpClient) { }

  addOrder(order:any){
    return this.http.post('http://localhost:8080/api/order',order);
  }
}

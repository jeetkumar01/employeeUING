import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http:HttpClient) { }
  getOrderDetails(id:any){
    
    return this.http.get(`http://localhost:8080/order/${id.id}`);
  }

  updateOrderStatus(orderId:any){
   const orderDetails={
      id:orderId
    }
    
    return this.http.put(`http://localhost:8080/order`,orderDetails);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl:String = "/api/v1/customers"
  
  // fetchAllCustomers():Observable<Customer[]>{
  //   return this.httpClient.get<Customer[]>(`${this.baseUrl}`)
  // }
}

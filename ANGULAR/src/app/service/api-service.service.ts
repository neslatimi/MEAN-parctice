import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { EmployeesComponent } from '../page/employees/employees.component';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url:string='http://localhost:3000/api';

  constructor(
    private http:HttpClient
  ) { }

  read():Observable<Employee>{
    return this.http.get<Employee>(this.url);
  }

  delete(id:number):Observable<Employee>{
    return this.http.delete<Employee>(`${this.url}/delete/${id}`);
  }

  getDepartment(){
    return this.http.get<Employee>(`${this.url}/new`);
  }
  
  getOne(id){
    return this.http.get<Employee>(`${this.url}/edit/${id}`);
  }

  update(id,data:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.url}/edit/${id}`,data)
  }
  create(data:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.url}/new`,data);
  }

  getDetails(id){
    return this.http.get<Employee>(`${this.url}/details/${id}`);
  }

}

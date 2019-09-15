import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

 employees$:Observable<any>=this.emp.read();
  
  constructor(
   private emp:ApiServiceService
  ) { }

  ngOnInit() {
  }

  onDelete(id):void{
    this.emp.delete(id).forEach(x=>x);
  }

}

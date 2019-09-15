import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  employee=new Employee();

  selectemployees$:Observable<any>=this.emp.getDepartment();

  constructor(
    private emp:ApiServiceService,
    private router :Router
  ) { }

  ngOnInit() {
  }

  onCreate(){
    this.emp.create(this.employee).forEach(x=>x);
    this.router.navigateByUrl('/employees')
  }

}

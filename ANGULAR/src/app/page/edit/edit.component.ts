import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employee:Employee;
  department:any;
  id;

  constructor(
    private emp:ApiServiceService,
    private router :Router,
    private ar:ActivatedRoute) {
      this.ar.params.forEach(params=>{
        this.id=params.id;
        this.emp.getOne(this.id).forEach(
          x=>{this.employee=x[0];}
        )
      })
      console.log(this.employee)
     }

  ngOnInit() {
  }

  onUpdate(){
    this.emp.update(this.id,this.employee).forEach(x=>{x})
    this.router.navigateByUrl("/employees")
  }

}

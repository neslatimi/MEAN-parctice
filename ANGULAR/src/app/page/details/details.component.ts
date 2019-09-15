import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  emp:Employee;
  id:number;

  constructor(
    private employee :ApiServiceService,
    private router :Router,
    private ar: ActivatedRoute
  ) { 
    this.ar.params.forEach(params=>{
      this.id=params.id;
      this.employee.getDetails(this.id).forEach(
        x=>{this.emp=x[0]}
      )
    })  
  }

  ngOnInit() {
  }

}

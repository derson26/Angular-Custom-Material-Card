import { Component, OnInit } from '@angular/core';
import { IPlans } from 'src/app/interfaces/plans';
import { ServicePlansService } from '../../services/service-plans.service';

@Component({
  selector: 'app-basic-plan',
  templateUrl: './basic-plan.component.html',
  styleUrls: ['./basic-plan.component.css']
})
export class BasicPlanComponent implements OnInit {
  plans_?: IPlans; 
  constructor(private service: ServicePlansService) { }

  ngOnInit(): void {
    this.service.basicPlan().subscribe( data => this.plans_ = data)
  }

  get basicPlan(){
    return this.plans_!;
  }
}

import { Component, OnInit } from '@angular/core';
import { IPlans } from 'src/app/interfaces/plans';
import { ServicePlansService } from '../../services/service-plans.service';
import { isEmpty, Observable } from 'rxjs';

@Component({
  selector: 'app-business-plan',
  templateUrl: './business-plan.component.html',
  styleUrls: ['./business-plan.component.css']
})
export class BusinessPlanComponent implements OnInit {
   // Basic Plan
   business_plans?:IPlans;
    // price: 100,
    // type: 'Business plan',
    // description: 'Ideal for small team and startup',
    // properties:[
    //   { property: 'Access to all basic features', allow: true},
    //   { property: 'basic reporting and analytics', allow:true},
    //   { property: 'up to 10 individual users',allow:true},
    //   { property: '20 GB individual data each user', allow:true},
    //   { property: 'basic chat and email support',allow:true},
    // ]
  
  constructor(private service: ServicePlansService) {}

  ngOnInit(): void {
    this.service.businessPlan().subscribe( 
      data => this.business_plans = data
    );
  }

  get businessPlan(){
    return this.business_plans!;
  }
}

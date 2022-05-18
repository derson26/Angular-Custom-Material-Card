import { Injectable } from '@angular/core';
import { catchError,throwError, Observable, of, ErrorObserver } from 'rxjs';
import { IPlans } from '../interfaces/plans';


@Injectable({
  providedIn: 'root'
})
export class ServicePlansService {
  private business_plans: IPlans  = {
    price: 100,
    type: 'Business plan',
    description: 'Ideal for small team and startup',
    properties:[
      { property: '200+integrations', allow: true},
      { property: 'advanced reporting and analytics', allow:true},
      { property: 'up to 20 individual users',allow:true},
      { property: '40 GB individual data each user', allow:true},
      { property: 'priority chat and email support',allow:true},
    ]
  };

  private basic_plans: IPlans  = {
    price: 10,
    type: 'Basic plan',
    description: 'Ideal for small team and startup',
    properties:[
      { property: 'Access to all basic features', allow: true},
      { property: 'basic reporting and analytics', allow:true},
      { property: 'up to 10 individual users',allow:true},
      { property: '20 GB individual data each user', allow:true},
      { property: 'basic chat and email support',allow:true},
    ]
  }

  constructor() { }
  // return Observable of basic Plan
  public basicPlan():Observable<IPlans>{
    return of(this.basic_plans);
  }

  // return Observable of business plan
  public businessPlan():Observable<IPlans>{
    return of(this.business_plans);
  }
}

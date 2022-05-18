import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessPlanComponent } from './components/business-plan/business-plan.component';
import { BasicPlanComponent } from './components/basic-plan/basic-plan.component';

const routes: Routes = [
  {path:'', component:BusinessPlanComponent},
  {path:'business/plan', component:BusinessPlanComponent},
  {path:'basic/plan', component:BasicPlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import {MatDividerModule} from '@angular/material/divider';
import { BusinessPlanComponent } from './components/business-plan/business-plan.component';
import { BasicPlanComponent } from './components/basic-plan/basic-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessPlanComponent,
    BasicPlanComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

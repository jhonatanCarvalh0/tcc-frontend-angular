import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Layouts for pages
import { SharedLayoutModule } from '../layouts/sharedLayout.module';

//pages
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// pages requirements
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { SharedComponentsModule } from '../components/sharedComponents.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BensMoveisModule } from './bens-moveis/bens-moveis.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    Page404Component,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedLayoutModule,
    SharedComponentsModule,
    BensMoveisModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    Page404Component,
    DashboardComponent,
  ],
})
export class SharedPageModule {}

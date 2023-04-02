import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//layouts
import { AuthenticationLayoutComponent } from './authentication-layout/authentication-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

//components
import { SharedComponentsModule } from '../components/sharedComponents.module';
import { NotfoundLayoutComponent } from './notfound-layout/notfound-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

@NgModule({
  declarations: [
    AuthenticationLayoutComponent,
    MainLayoutComponent,
    NotfoundLayoutComponent,
    DashboardLayoutComponent,
  ],
  imports: [CommonModule, SharedComponentsModule],
  exports: [
    AuthenticationLayoutComponent,
    MainLayoutComponent,
    NotfoundLayoutComponent,
    DashboardLayoutComponent,
  ],
})
export class SharedLayoutModule {}

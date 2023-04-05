import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { NavbarComponent } from './navbar/navbar.component';
import { AngularMaterialModule } from './angular-material/material.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { PrimeNGModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HeaderDashboardComponent,
  ],
  imports: [CommonModule, AngularMaterialModule, PrimeNGModule, RouterModule],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HeaderDashboardComponent,
  ],
})
export class SharedComponentsModule {}

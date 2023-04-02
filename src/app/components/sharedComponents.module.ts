import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { NavbarComponent } from './navbar/navbar.component';
import { AngularMaterialModule } from './angular-material/material.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  exports: [NavbarComponent, HeaderComponent, FooterComponent],
})
export class SharedComponentsModule {}

import { NgModule } from '@angular/core';

//angular-material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSelectModule],
})
export class AngularMaterialModule {}

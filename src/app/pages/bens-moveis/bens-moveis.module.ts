import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IngressoComponent } from './ingresso/ingresso.component';
import { SharedLayoutModule } from 'src/app/layouts/sharedLayout.module';
import { IncorporacaoComponent } from './incorporacao/incorporacao.component';
import { InventarioComponent } from './inventario/inventario.component';
import { DesfazimentoBaixaComponent } from './desfazimento-baixa/desfazimento-baixa.component';
import { IngressoSaidaTemporariaComponent } from './ingresso-saida-temporaria/ingresso-saida-temporaria.component';
import { ProcedimentosContabeisModule } from './procedimentos-contabeis/procedimentos-contabeis.module';
import { AngularMaterialModule } from 'src/app/components/angular-material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IngressoComponent,
    IncorporacaoComponent,
    InventarioComponent,
    DesfazimentoBaixaComponent,
    IngressoSaidaTemporariaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProcedimentosContabeisModule,
    SharedLayoutModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    IngressoComponent,
    IncorporacaoComponent,
    InventarioComponent,
    DesfazimentoBaixaComponent,
    IngressoSaidaTemporariaComponent,
  ],
})
export class BensMoveisModule {}

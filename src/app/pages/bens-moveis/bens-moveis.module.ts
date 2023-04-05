import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngressoBensMoveisComponent } from './ingresso-bens-moveis/ingresso-bens-moveis.component';
import { SharedLayoutModule } from 'src/app/layouts/sharedLayout.module';
import { IncorporacaoComponent } from './incorporacao/incorporacao.component';
import { InventarioComponent } from './inventario/inventario.component';
import { DesfazimentoBaixaComponent } from './desfazimento-baixa/desfazimento-baixa.component';
import { IngressoSaidaTemporariaComponent } from './ingresso-saida-temporaria/ingresso-saida-temporaria.component';
import { ProcedimentosContabeisModule } from './procedimentos-contabeis/procedimentos-contabeis.module';

@NgModule({
  declarations: [
    IngressoBensMoveisComponent,
    IncorporacaoComponent,
    InventarioComponent,
    DesfazimentoBaixaComponent,
    IngressoSaidaTemporariaComponent,
  ],
  imports: [CommonModule, ProcedimentosContabeisModule, SharedLayoutModule],
  exports: [
    IngressoBensMoveisComponent,
    IncorporacaoComponent,
    InventarioComponent,
    DesfazimentoBaixaComponent,
    IngressoSaidaTemporariaComponent,
  ],
})
export class BensMoveisModule {}

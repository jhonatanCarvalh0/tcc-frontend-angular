import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmortizacaoComponent } from './amortizacao/amortizacao.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { DepreciacaoComponent } from './depreciacao/depreciacao.component';
import { ExaustaoComponent } from './exaustao/exaustao.component';
import { ReavaliacaoComponent } from './reavaliacao/reavaliacao.component';
import { ReducaoValorRecuperavelComponent } from './reducao-valor-recuperavel/reducao-valor-recuperavel.component';
import { SharedLayoutModule } from 'src/app/layouts/sharedLayout.module';

@NgModule({
  declarations: [
    AmortizacaoComponent,
    AvaliacaoComponent,
    DepreciacaoComponent,
    ExaustaoComponent,
    ReavaliacaoComponent,
    ReducaoValorRecuperavelComponent,
  ],
  imports: [CommonModule, SharedLayoutModule],
  exports: [
    AmortizacaoComponent,
    AvaliacaoComponent,
    DepreciacaoComponent,
    ExaustaoComponent,
    ReavaliacaoComponent,
    ReducaoValorRecuperavelComponent,
  ],
})
export class ProcedimentosContabeisModule {}

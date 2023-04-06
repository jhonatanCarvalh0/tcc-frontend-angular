import { NgModule } from '@angular/core';

//routing
import { RouterModule, Routes } from '@angular/router';

//pages
import { MainComponent } from '../pages/main/main.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { Page404Component } from '../pages/page404/page404.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { IngressoComponent } from '../pages/bens-moveis/ingresso/ingresso.component';
import { IncorporacaoComponent } from '../pages/bens-moveis/incorporacao/incorporacao.component';
import { InventarioComponent } from '../pages/bens-moveis/inventario/inventario.component';
import { DesfazimentoBaixaComponent } from '../pages/bens-moveis/desfazimento-baixa/desfazimento-baixa.component';
import { IngressoSaidaTemporariaComponent } from '../pages/bens-moveis/ingresso-saida-temporaria/ingresso-saida-temporaria.component';
import { AvaliacaoComponent } from '../pages/bens-moveis/procedimentos-contabeis/avaliacao/avaliacao.component';
import { ReavaliacaoComponent } from '../pages/bens-moveis/procedimentos-contabeis/reavaliacao/reavaliacao.component';
import { ReducaoValorRecuperavelComponent } from '../pages/bens-moveis/procedimentos-contabeis/reducao-valor-recuperavel/reducao-valor-recuperavel.component';
import { DepreciacaoComponent } from '../pages/bens-moveis/procedimentos-contabeis/depreciacao/depreciacao.component';
import { AmortizacaoComponent } from '../pages/bens-moveis/procedimentos-contabeis/amortizacao/amortizacao.component';
import { ExaustaoComponent } from '../pages/bens-moveis/procedimentos-contabeis/exaustao/exaustao.component';

const routes: Routes = [
  /**/
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '404',
    component: Page404Component,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'bens-moveis/ingresso',
    component: IngressoComponent,
  },
  {
    path: 'bens-moveis/incorporacao',
    component: IncorporacaoComponent,
  },
  {
    path: 'bens-moveis/inventario',
    component: InventarioComponent,
  },
  {
    path: 'bens-moveis/desfazimento-baixa',
    component: DesfazimentoBaixaComponent,
  },
  {
    path: 'bens-moveis/ingresso-saida-temporaria',
    component: IngressoSaidaTemporariaComponent,
  },
  {
    path: 'bens-moveis/procedimentos-contabeis/avaliacao',
    component: AvaliacaoComponent,
  },
  {
    path: 'bens-moveis/procedimentos-contabeis/reavaliacao',
    component: ReavaliacaoComponent,
  },
  {
    path: 'bens-moveis/procedimentos-contabeis/reducao-valor-recuperavel',
    component: ReducaoValorRecuperavelComponent,
  },
  {
    path: 'bens-moveis/procedimentos-contabeis/depreciacao',
    component: DepreciacaoComponent,
  },
  {
    path: 'bens-moveis/procedimentos-contabeis/amortizacao',
    component: AmortizacaoComponent,
  },
  {
    path: 'bens-moveis/procedimentos-contabeis/exaustao',
    component: ExaustaoComponent,
  },

  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

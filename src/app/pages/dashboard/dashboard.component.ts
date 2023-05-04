import { Component, OnInit } from '@angular/core';
import { BensMoveisService } from '../bens-moveis/bens-moveis.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  bensMoveis = [
    {
      nome: 'nome',
      descricao: 'descricao',
      valor: 'valor',
      arquivosAnexados: [{ arquivo1: 'string' }, { arquivo2: 'string' }],
      tipoIngresso: 'tipoIngresso',
      ingressoId: 'ingressoId',
    },
  ];

  constructor(private bensMoveisService: BensMoveisService) {}

  ngOnInit(): void {
    console.log('ngOinit');
  }
  showConsoleLog(action: string): void {
    console.log(`Ação "${action}" selecionada`);
    alert(`Ação "${action}" selecionada`);
  }

}

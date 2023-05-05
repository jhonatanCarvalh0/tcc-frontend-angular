import { Component, OnInit } from '@angular/core';
import { BensMoveisService } from '../bens-moveis/bens-moveis.service';
import { BemMovel } from 'src/app/models/ingresso';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  bensMoveisTeste = [
    {
      nome: 'nome',
      descricao: 'descricao',
      valor: 'valor',
      arquivosAnexados: [{ arquivo1: 'string' }, { arquivo2: 'string' }],
      tipoIngresso: 'tipoIngresso',
      ingressoId: 'ingressoId',
    },
  ];

  bensMoveis: any[] = [];

  constructor(private bensMoveisService: BensMoveisService) {}

  ngOnInit(): void {
    this.bensMoveisService.findAll().subscribe((bensMoveis: any) => {
      this.bensMoveis = bensMoveis;
      console.log(this.bensMoveis);
      
    });
  }

  showConsoleLog(action: string): void {
    console.log(`Ação "${action}" selecionada`);
    alert(`Ação "${action}" selecionada`);
  }
}

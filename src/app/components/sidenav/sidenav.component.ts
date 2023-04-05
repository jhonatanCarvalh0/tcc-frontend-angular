import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  items!: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/dashboard'],
      },
      {
        label: 'Bens Móveis',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Ingresso de Bens Móveis',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/bens-moveis/ingresso'],
          },
          {
            label: 'Incorporação de Bens Móveis',
            icon: 'pi pi-fw pi-trash',
            routerLink: ['/bens-moveis/incorporacao'],
          },
          {
            label: 'Inventário',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/bens-moveis/inventario'],
          },
          {
            label: 'Desfazimento/Baixa',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/bens-moveis/desfazimento-baixa'],
          },
          {
            label: 'Ingresso e saída Temporária',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/bens-moveis/ingresso-saida-temporaria'],
          },
          {
            label: 'Procedimentos contábeis',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Avaliação',
                icon: 'pi pi-fw pi-plus',
                routerLink: ['/bens-moveis/procedimentos-contabeis/avaliacao'],
              },
              {
                label: 'Reavaliação',
                icon: 'pi pi-fw pi-plus',
                routerLink: [
                  '/bens-moveis/procedimentos-contabeis/reavaliacao',
                ],
              },
              {
                label: 'Redução ao valor recuperável',
                icon: 'pi pi-fw pi-plus',
                routerLink: [
                  '/bens-moveis/procedimentos-contabeis/reducao-valor-recuperavel',
                ],
              },
              {
                label: 'Depreciação',
                icon: 'pi pi-fw pi-plus',
                routerLink: [
                  '/bens-moveis/procedimentos-contabeis/depreciacao',
                ],
              },
              {
                label: 'Amortização',
                icon: 'pi pi-fw pi-plus',
                routerLink: [
                  '/bens-moveis/procedimentos-contabeis/amortizacao',
                ],
              },
              {
                label: 'Exaustão',
                icon: 'pi pi-fw pi-plus',
                routerLink: ['/bens-moveis/procedimentos-contabeis/exaustao'],
              },
            ],
          },
          {
            separator: true,
          },
        ],
      },
      {
        separator: true,
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}

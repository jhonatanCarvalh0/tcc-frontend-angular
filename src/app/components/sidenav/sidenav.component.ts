import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'Bens Móveis',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Ingresso de Bens Móveis',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Incorporação de Bens Móveis',
            icon: 'pi pi-fw pi-trash',
          },
          {
            label: 'Inventário',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Desfazimento/Baixa',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Ingresso e saída Temporária',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Procedimentos contábeis',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Avaliação',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Reavaliação',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Redução ao valor recuperável',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Depreciação',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Amortização',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Exaustão',
                icon: 'pi pi-fw pi-plus',
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

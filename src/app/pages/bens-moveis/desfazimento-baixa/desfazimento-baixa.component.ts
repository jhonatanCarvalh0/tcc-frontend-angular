import { Component, OnInit, ViewChild } from '@angular/core';
import { BensMoveisService } from '../bens-moveis.service';

@Component({
  selector: 'app-desfazimento-baixa',
  templateUrl: './desfazimento-baixa.component.html',
  styleUrls: ['./desfazimento-baixa.component.css'],
})
export class DesfazimentoBaixaComponent implements OnInit {
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

  @ViewChild('mostrarDialog') mostrarDialog: any;

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

  //handle the table of files
  arquivos: { nome: string; tamanho: number }[] = [];
  allowedTypes = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];
  handleFileTable(
    action: string,
    arquivo?: { nome: string; tamanho: number }
  ): void {
    if (action === 'add') {
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = true;
      input.accept = 'image/*';
      input.onchange = () => {
        for (let i = 0; i < input.files!.length; i++) {
          const entry = input.files![i];
          const newFile = {
            nome: entry.name,
            tamanho: entry.size,
            tipo: entry.type,
            conteudo: entry,
          };
          this.arquivos.push(newFile);
        }
      };
      input.click();
    } else if (action === 'remove' && arquivo) {
      console.log('entrou pra remover');

      const fileInfo = { nome: arquivo.nome, tamanho: arquivo.tamanho };
      const index = this.arquivos.indexOf(fileInfo);
      if (index !== -1) {
        console.log('entrou condicao index !== -1');

        this.arquivos.splice(index, 1);
      }
      console.log(index);

      console.log(this.arquivos);
    }
  }

  selectItem(item: { id: null; isSelected: boolean }) {
    let selectedItemId: null = null;
    // Se já houver um item selecionado, desmarcar
    if (selectedItemId !== null) {
      const selectedItem = this.bensMoveis.find(
        (bem) => bem.id === selectedItemId
      );
      if (selectedItem) {
        selectedItem.isSelected = false;
      }
    }

    // Marcar o novo item selecionado
    item.isSelected = true;
    selectedItemId = item.id;
  }

  formatCurrency(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = parseFloat(input.value);
    const formattedValue = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    input.value = formattedValue;
  }
}

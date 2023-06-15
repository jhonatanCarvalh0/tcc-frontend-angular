import { Component, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';

//services
import { IngressoService } from './ingresso.service';

//models
import { Ingresso, BemMovel } from '../../../models/ingresso'; // importe os modelos de dados necessários
import { STRING_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-ingresso',
  templateUrl: './ingresso.component.html',
  styleUrls: ['./ingresso.component.css'],
})
export class IngressoComponent {
  // label option selection
  options = [
    { value: 'compra', label: 'Compra' },
    { value: 'convenio', label: 'Convênio' },
    { value: 'doacao', label: 'Doacao' },
    { value: 'adjudicacao', label: 'Adjudicação' },
    { value: 'dacaoPagamento', label: 'Dação em Pagamento' },
    {
      value: 'producaoPropriaReaproveitamento',
      label: 'Producao Propria e Reaproveitamento',
    },
    { value: 'apreensao', label: 'Apreensao' },
    { value: 'procriacao', label: 'Procriacão' },
    { value: 'permuta', label: 'Permuta' },
    { value: 'transferencia', label: 'Transferência' },
    { value: 'achados', label: 'Achados' },
    { value: 'restituicao', label: 'Restituição' },
  ];
  selectedOption!: string;

  // table for bens-moveis
  novoIngresso: Ingresso = {
    tipoIngresso: '',
    bensMoveis: [],
  };

  novoBemMovel: BemMovel = {
    nome: '',
    descricao: '',
    valor: 0,
    arquivosAnexados: [],
  };

  arquivos: { nome: string; tamanho: number }[] = [];
  allowedTypes = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  constructor(private ingressoService: IngressoService) {}

  //for test purposes
  alert() {
    return console.log('funcionando');
  }

  //handel table actions as show, edit and remove
  tableActions(action: string, bem: BemMovel) {
    if (action === 'show') {
      console.log('show');
    }

    if (action === 'edit') {
      console.log('edit');
    }

    if (action === 'remove') {
      console.log('remove');
    }
  }

  @ViewChild('mostrarDialog') mostrarDialog: any;
  

  //handle table bens moveis from ingresso
  adicionarNovoBemALista() {
    this.novoIngresso.bensMoveis.push(this.novoBemMovel);
    this.novoBemMovel = {
      nome: '',
      descricao: '',
      valor: 0,
      arquivosAnexados: [],
    };
  }

  //seng the data to backend
  onSubmit() {
    console.log('entered onSubmit');
    this.novoIngresso.tipoIngresso = this.selectedOption;
    if (typeof this.novoBemMovel.valor === 'string') {
      this.novoBemMovel.valor = parseFloat(this.novoBemMovel.valor);
    }

    this.ingressoService.createIngresso(this.novoIngresso).subscribe(
      (ingressoCriado) => {
        console.log('Ingresso criado:', ingressoCriado);
        // faça algo com o ingresso criado, se necessário
      },
      (erro) => {
        console.error('Erro ao criar ingresso:', erro);
        // trate o erro, se necessário
      }
    );
  }

  //handle the table of files
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
          this.novoBemMovel.arquivosAnexados.push(arquivo);
          this.arquivos.push(newFile);
        }
      };
      input.click();
    } else if (action === 'remove' && arquivo) {
      const fileInfo = { nome: arquivo.nome, tamanho: arquivo.tamanho };
      const index = this.arquivos.indexOf(fileInfo);
      if (index !== -1) {
        this.arquivos.splice(index, 1);
      }
    }
  }
}

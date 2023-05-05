import { Component, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';

//services
import { IngressoService } from './ingresso.service';

//models
import { Ingresso, BemMovel } from '../../../models/ingresso'; // importe os modelos de dados necessários

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
  bens = [
    {
      nome: 'cadeira',
      descricao: 'cadeira de madeira',
      valor: 50.0,
      arquivosAnexados: ['foto_cadeira1.jpg', 'foto_cadeira2.jpg'],
    },
  ];

  //novoBem = { nome: '', descricao: '', valor: '', arquivosAnexados: [] };

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

  alert() {
    return console.log('funcionando');
  }

  tableActions(action: string, bem: BemMovel) {
    if (action === 'show') {
      console.log('show');
    }

    if (action === 'edit') {
      console.log('edit');
    }

    if (action === 'remove') {
      const index = this.bens.indexOf(bem);
      if (index > -1) {
        this.bens.splice(index, 1);
      }
    }
  }

  @ViewChild('mostrarDialog') mostrarDialog: any;

  adicionarNovoBemALista() {
    /*{this.bens.push(this.novoBemMovel);
    this.mostrarDialog = false; // atualiza a variável de classe
    this.novoBemMovel = {
      nome: '',
      descricao: '',
      valor: 0,
      arquivosAnexados: [],
      }; // limpa o formulário
    }*/
    this.novoIngresso.bensMoveis.push(this.novoBemMovel);
    this.novoBemMovel = {
      nome: '',
      descricao: '',
      valor: 0,
      arquivosAnexados: [],
    };
  }

  onSubmit() {
    this.ingressoService.criarIngresso(this.novoIngresso).subscribe(
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

  /*fecharDialog() {
    this.mostrarDialog = false;
  }*/

  //table for files

  adicionarArquivo(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.arquivos.push(file);
      this.novoBemMovel.arquivosAnexados.push(file.name);
    }
  }
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
      const fileInfo = { nome: arquivo.nome, tamanho: arquivo.tamanho };
      const index = this.arquivos.indexOf(fileInfo);
      if (index !== -1) {
        this.arquivos.splice(index, 1);
      }
    }
  }

  /*handleFileTable(action: string, arquivo?: { nome: string; tamanho: string }) {
    const openFileDialog = () => {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.multiple = true;
      fileInput.accept = this.allowedTypes.join(',');

      fileInput.addEventListener('change', (event) => {
        const inputElement = event.target as HTMLInputElement; // especifica o tipo de event.target como HTMLInputElement
        if (inputElement && inputElement.files) {
          // verifica se inputElement e inputElement.files não são null
          const files = inputElement.files;
          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const tamanho = (file.size / 1024 / 1024).toFixed(2) + ' MB';
            this.arquivos.push({ nome: file.name, tamanho: tamanho });
          }
        }
      });

      fileInput.click();
    };
    const removerArquivo = (arquivo: { nome: string; tamanho: string }) => {
      if (arquivo === undefined) {
        return;
      }

      const index = this.arquivos.indexOf(arquivo);
      if (index > -1) {
        this.arquivos.splice(index, 1);
      }
    };
    if (action === 'add') {
      openFileDialog();
    }
    if (action === 'remove') {
      removerArquivo(arquivo!);
    }
  }*/

  /*fileDropped(event: CdkDragDrop<NgxFileDropEntry[]>) {
    const dropped = event.item;
    if (dropped instanceof FileSystemFileEntry) {
      const fileEntry = dropped as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        if (this.allowedTypes.indexOf(file.type) > -1) {
          const tamanho = (file.size / 1024 / 1024).toFixed(2) + ' MB';
          this.arquivos.push({ nome: file.name, tamanho: tamanho });
        }
      });
    }
  }*/

  /*drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.arquivos, event.previousIndex, event.currentIndex);
  }*/
}

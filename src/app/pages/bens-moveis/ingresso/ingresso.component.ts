import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';

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
    { nome: 'Bem 1', campo1: 'Valor 1', campo2: 'Valor 2' },
    { nome: 'Bem 2', campo1: 'Valor 3', campo2: 'Valor 4' },
    { nome: 'Bem 3', campo1: 'Valor 5', campo2: 'Valor 6' },
  ];

  novoBem = { nome: '', campo1: '', campo2: '' };
  mostrarPopup = false;

  adicionarBem() {
    this.novoBem = { nome: '', campo1: '', campo2: '' };
    this.mostrarPopup = true;
  }

  verBem(bem: any) {
    console.log('Ver bem:', bem);
  }

  editarBem(bem: any) {
    console.log('Editar bem:', bem);
  }

  excluirBem(bem: any) {
    console.log('Excluir bem:', bem);
  }

  adicionarNovoBem() {
    this.bens.push(this.novoBem);
    this.fecharPopup();
  }

  fecharPopup() {
    this.mostrarPopup = false;
  }

  //table for files
  arquivos: { nome: string; tamanho: string }[] = [];
  allowedTypes = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  openFileDialog() {
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
  }

  fileDropped(event: CdkDragDrop<NgxFileDropEntry[]>) {
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
  }

  removerArquivo(arquivo: { nome: string; tamanho: string }) {
    const index = this.arquivos.indexOf(arquivo);
    if (index > -1) {
      this.arquivos.splice(index, 1);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.arquivos, event.previousIndex, event.currentIndex);
  }
}

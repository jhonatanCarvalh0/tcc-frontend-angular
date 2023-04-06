import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  //handle form
  formularioCompra: FormGroup;
  formularioConvenio: FormGroup;
  formularioDoacao: FormGroup;
  formularioAdjudicacao: FormGroup;
  formularioDacaoPagamento: FormGroup;
  formularioProducaoPropriaReaproveitamento: FormGroup;
  formularioApreensao: FormGroup;
  formularioProcriacao: FormGroup;
  formularioPermuta: FormGroup;
  formularioTransferencia: FormGroup;
  formularioAchados: FormGroup;
  formularioRestituicao: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Compra
    this.formularioCompra = this.formBuilder.group({
      numeroProcesso: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      quantidade: ['', Validators.required],
      unidadeMedida: ['', Validators.required],
      fornecedor: this.formBuilder.group({
        nome: ['', Validators.required],
        cpfCnpj: ['', Validators.required],
        endereco: ['', Validators.required],
        telefone: ['', Validators.required],
      }),
      dataCompra: ['', Validators.required],
      numNotaFiscal: ['', Validators.required],
      dataNotaFiscal: ['', Validators.required],
      comprovantePagamento: ['', Validators.required],
      formaPagamento: ['', Validators.required],
      dataPagamento: ['', Validators.required],
      numeroEmpenho: ['', Validators.required],
      dataEmpenho: ['', Validators.required],
      observacoes: [''],
    });
    // Convênio
    this.formularioConvenio = this.formBuilder.group({
      descricao: ['', Validators.required],
    });
    // Doacao
    this.formularioDoacao = this.formBuilder.group({
      tipoDoacao: ['', Validators.required],
      descricao: ['', Validators.required],
      valorAquisicao: ['', Validators.required],
      dataAquisicao: ['', Validators.required],
      termoDoacao: ['', Validators.required],
      nomeDoador: ['', Validators.required],
      cpfCnpjDoador: ['', Validators.required],
      enderecoDoador: ['', Validators.required],
      telefoneDoador: [''],
      projetoPrograma: [''],
      estadoAtual: [''],
      formaEntrega: [''],
      comprovacaoPropriedade: ['', Validators.required],
    });
    // Adjudicacção
    this.formularioAdjudicacao = this.formBuilder.group({
      descricao: ['', Validators.required],
    });
    // Dação em pagamento
    this.formularioDacaoPagamento = this.formBuilder.group({
      descricao: ['', Validators.required],
    });
    // Produção própria e reaproveitamento
    this.formularioProducaoPropriaReaproveitamento = this.formBuilder.group({
      descricao: ['', Validators.required],
    });
    // Apreensão
    this.formularioApreensao = this.formBuilder.group({
      descricao: ['', Validators.required],
    });
    // Procriação
    this.formularioProcriacao = this.formBuilder.group({
      descricao: ['', Validators.required],
    });
    // Permuta
    this.formularioPermuta = this.formBuilder.group({
      descricao: ['', Validators.required],
    });
    // Transferência
    this.formularioTransferencia = this.formBuilder.group({
      descricao: ['', Validators.required],
    });
    // Achados
    this.formularioAchados = this.formBuilder.group({
      descricao: ['', Validators.required],
    });
    // Restituição de bem
    this.formularioRestituicao = this.formBuilder.group({
      descricao: ['', Validators.required],
    });
  }

  onSubmitCompra() {
    console.log(this.formularioCompra.value);
  }

  onSubmitConvenio() {
    console.log(this.formularioConvenio.value);
  }

  onSubmitDoacao() {
    console.log(this.formularioDoacao.value);
  }

  onSubmitAdjudicacao() {
    console.log(this.formularioAdjudicacao.value);
  }

  onSubmitDacaoPagamento() {
    console.log(this.formularioDacaoPagamento.value);
  }

  onSubmitProducaoPropriaReaproveitamento() {
    console.log(this.formularioProducaoPropriaReaproveitamento.value);
  }

  onSubmitApreensao() {
    console.log(this.formularioApreensao.value);
  }

  onSubmitProcriacao() {
    console.log(this.formularioProcriacao.value);
  }

  onSubmitPermuta() {
    console.log(this.formularioPermuta.value);
  }

  onSubmitTransferencia() {
    console.log(this.formularioTransferencia.value);
  }

  onSubmitAchados() {
    console.log(this.formularioAchados.value);
  }

  onSubmitRestituicao() {
    console.log(this.formularioRestituicao.value);
  }
}

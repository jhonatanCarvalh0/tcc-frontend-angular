export interface Ingresso {
  tipoIngresso: string;
  bensMoveis: BemMovel[];
}

export interface BemMovel {
  nome: string;
  descricao: string;
  valor: number;
  arquivosAnexados: string[];
}

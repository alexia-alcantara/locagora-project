import { Component } from '@angular/core';

interface Periodicidade{
  name: string;
}

interface TypeMoto{
  name: string;
}

interface Pagamento{
  name: string;
}

@Component({
  selector: 'app-planos-detalhe',
  templateUrl: './planos-detalhe.component.html',
  styleUrls: ['./planos-detalhe.component.scss']
})
export class PlanosDetalheComponent {
  periodos: Periodicidade[];
  selectedPeriodos: Periodicidade[];

  motos: TypeMoto[];
  selectedMotos: TypeMoto[];

  pagamentos: Pagamento[];
  selectedPagamentos: Pagamento[];

  ngOnInit(){
    this.periodos = [
      { name: 'Período 1'},
      { name: 'Período 1'},
      { name: 'Período 1'},
      { name: 'Período 1'},
      { name: 'Período 1'},
    ];

    this.motos = [
      {name: 'Selecione'}
    ];

    this.pagamentos = [
      {name: 'Pix'},
      {name: 'Débito'},
      {name: 'Crédito'},
    ]
  }

}

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

interface VigenciaPlano{
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
  vigenciaPlan: VigenciaPlano[];
  selectedVigencia: VigenciaPlano[];
  selectedCategories: any[] = [];

  categories: any[] = [
      { name: 'Accounting', key: 'A' },
      { name: 'Marketing', key: 'M' },
      { name: 'Production', key: 'P' },
      { name: 'Research', key: 'R' }
  ];

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
    ];
    
    this.vigenciaPlan = [
      {name: 'Selecione'}
    ]
  }

}

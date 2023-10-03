import { Component } from '@angular/core';

interface Periodicidade{
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


  ngOnInit(){
    this.periodos = [
      { name: 'Período 1'},
      { name: 'Período 1'},
      { name: 'Período 1'},
      { name: 'Período 1'},
      { name: 'Período 1'},
    ]
  }

}

import { Component } from '@angular/core';

interface Moto{
  name: string;
}

@Component({
  selector: 'app-lojas-detalhe',
  templateUrl: './lojas-detalhe.component.html',
  styleUrls: ['./lojas-detalhe.component.scss']
})
export class LojasDetalheComponent {
  motos: Moto[];
  selectedMoto: Moto[];

  planos = [
    { nome: 'Moto' },
    { nome: 'Moto' },
    { nome: 'Moto' },
    { nome: 'Moto' },
  ];

  listPlans = [
    {nome: 'Nome do Plano'},
    {nome: 'Nome do Plano'},
    {nome: 'Nome do Plano'},
  ]

  ngOnInit() {
    this.motos = [
        { name: 'Moto 1'},
        { name: 'Moto 2'},
    ];
}


}

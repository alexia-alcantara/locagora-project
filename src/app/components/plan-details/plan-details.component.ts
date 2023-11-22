import { Component, Input } from '@angular/core';

interface Moto{
  name: string;
}

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.scss']
})
export class PlanDetailsComponent {
  @Input() planDetails: any;

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

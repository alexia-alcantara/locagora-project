import { Component } from '@angular/core';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent {

  togglePanel(index: number) {
    this.openCard = index === this.openCard ? -1 : index;
  }

  dadosCard = [
    { nome: 'Nome do plano',  },
    { nome: 'Nome do plano',  },
    { nome: 'Nome do plano',  },
  ];

  openCard: number = -1;

  motos = [
    { nome: 'Nome da Moto', imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_689980-MLB70479888082_072023-O.webp' },
    { nome: 'Nome da Moto', imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_689980-MLB70479888082_072023-O.webp' },
    { nome: 'Nome da Moto', imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_689980-MLB70479888082_072023-O.webp' },
  ]
}

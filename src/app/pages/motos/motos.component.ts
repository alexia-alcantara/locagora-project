import { Component } from '@angular/core';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.scss']
})
export class MotosComponent {

  motos = [
    { nome: 'Nome da Moto', imagem: '../../../assets/images/moto.png' },
    { nome: 'Nome da Moto', imagem: '../../../assets/images/moto.png' },
    { nome: 'Nome da Moto', imagem: '../../../assets/images/moto.png' },
  ]
}

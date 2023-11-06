import { Component } from '@angular/core';

@Component({
  selector: 'app-motos-detalhe',
  templateUrl: './motos-detalhe.component.html',
  styleUrls: ['./motos-detalhe.component.scss']
})
export class MotosDetalheComponent {
  photos!: string;

  photoList = ['Foto principal 1', 'Foto principal 2', 'Foto principal 3', 'Foto principal 4', ];
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private backRoute: { [rota: string]: string } = {
    '/usuarios/editar-usuario': '/usuarios',
    '/planos/detalhe-plano': '/planos',
    '/lojas/detalhe-loja': '/lojas'
  };

  getBackRoute(currentRoute: string): string {
    return this.backRoute[currentRoute] || '/';
  }
}
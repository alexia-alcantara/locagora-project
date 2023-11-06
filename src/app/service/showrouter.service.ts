import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })

export class ShowRouterService{
    private rotasDetalhes: string[] = ['/usuarios/editar-usuario', '/lojas/detalhe-loja', '/planos/detalhe-plano', '/motos/detalhe-moto'];

    showIcons: boolean = true;

    atualizarExibicaoIcone(url: string) {
        this.showIcons = !this.rotasDetalhes.some(rotaDetalhe => url.includes(rotaDetalhe));
    }

}
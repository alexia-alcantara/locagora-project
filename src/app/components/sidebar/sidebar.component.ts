import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RouteService } from 'src/app/service/backrouter.service';
import { ShowRouterService } from 'src/app/service/showrouter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  titleRoutes: { [rota: string]: { titulo: string, icone: string } } = {
    '/contatos': { titulo: 'Lista de Contatos', icone: '/assets/images/ic_menu_contratos.svg' },
    '/usuarios': { titulo: 'Usuários do Sistema', icone: '/assets/images/ic_menu_usuarios.svg' },
    '/lojas': { titulo: 'Lojas', icone: '/assets/images/ic_menu_lojas.svg' },
    '/planos': { titulo: 'Planos', icone: '/assets/images/ic_menu_planos.svg' },
    '/notificacoes': { titulo: 'Notificações', icone: '/assets/images/ic_menu_notificacoes.svg' },
  };

  showComponents: boolean = true;
  back: any;



  constructor(
    public showRouterService: ShowRouterService,
    private router: Router,
    public routeService: RouteService,
    private route: ActivatedRoute){
      if (this.router.url.includes('/usuarios/editar-usuario') || this.router.url.includes('/contatos/detalhe')) {
        this.showComponents = false; 
      }
  }

  getTitle(): string {
    const rotaAtual = this.router.url;
    return this.titleRoutes[rotaAtual]?.titulo || 'Lista de Contatos';
  }

  getIcon(): string {
    const rotaAtual = this.router.url;
    return this.titleRoutes[rotaAtual]?.icone || '/assets/images/ic_menu_contratos.svg';
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showRouterService.atualizarExibicaoIcone(event.url);
      }
    });
  }


  backRoute() {
    const previousUrl = this.routeService.getPreviousUrl();
    if (previousUrl) {
      this.router.navigateByUrl(previousUrl);
    } else {
      alert('Não há uma rota anterior registrada.');
    }
  }


  exit() {
    this.router.navigate(['/login']);
  }


}

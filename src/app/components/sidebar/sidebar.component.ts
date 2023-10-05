import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouteService } from 'src/app/service/backrouter.service';
import { ShowRouterService } from 'src/app/service/showrouter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  showComponents = true;
  back: any;

  constructor(
    public showRouterService: ShowRouterService,
    private router: Router,
    private routeService: RouteService){}


    backRoute() {
      const backRouter = this.routeService.getBackRoute(this.router.url);
      this.router.navigate([backRouter]);
    }


}

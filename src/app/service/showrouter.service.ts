import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
  })

export class ShowRouterService{
    public showComponentsSubject = new BehaviorSubject<boolean>(true);
    showComponents$ = this.showComponentsSubject.asObservable();

    constructor(private router: Router){
        this.router.events.subscribe((event) =>{
            if(event instanceof NavigationEnd){
                this.showComponentsSubject.next(!event.url.includes('/'))
            }
        })
    }

}
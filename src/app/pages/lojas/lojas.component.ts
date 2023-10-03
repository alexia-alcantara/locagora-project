import { Component } from '@angular/core';
import { Lojas } from 'src/app/models/shops';
import { CustomerService } from 'src/app/service/customerservice';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.scss']
})
export class LojasComponent {

  shops: Lojas[];

  constructor(private customerService: CustomerService){}

  ngOnInit(){
    this.customerService.getCustomersShops().then((shops) => (this.shops = shops));
  }
}

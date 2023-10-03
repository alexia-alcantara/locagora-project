import { Component } from '@angular/core';
import { UsersContact } from 'src/app/models/usersContact';
import { CustomerService } from 'src/app/service/customerservice';

interface Status{
  name: string;
}

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent {

  contacts: UsersContact[];

  status: Status [];
  selectedStatus: Status [];

  constructor(private customerService: CustomerService){}

  ngOnInit(){
    this.customerService.getCustomersLarge().then((contacts) => (this.contacts = contacts));

    this.status = [
      {name: 'Selecione'},
      {name: 'Selecione'},
      {name: 'Selecione'},
      {name: 'Selecione'},
    ]
  }

}

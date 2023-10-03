import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersContact } from 'src/app/models/usersContact';
import { CustomerService } from 'src/app/service/customerservice';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {

  users: User[];

  constructor(private customerService: CustomerService){}

  ngOnInit(){
    this.customerService.getCustomersUsers().then((users) => (this.users = users));
  }

}

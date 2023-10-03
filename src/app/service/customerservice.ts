import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {
    getData() {
        return [
            {
                name: 'Nome do Contato',
                email: 'email@email.com',
                telephone: '31-93658-9696',
                address: 'Benton, John B Jr',
                planName: 'Nome do Plano',
                status: 'unqualified',
            },
            {
                name: 'James Butt',
                email: 'email@email.com',
                telephone: '(31) 99999-9999',
                address: 'Endereço em 2 linhas',
                planName: 'Nome do Plano',
                status: 'unqualified',
            },
            {
                name: 'James Butt',
                email: 'email@email.com',
                telephone: '(31) 99999-9999',
                address: 'Endereço em 2 linhas',
                planName: 'Nome do Plano',
                status: 'unqualified',
            },
            {
                name: 'James Butt',
                email: 'email@email.com',
                telephone: '(31) 99999-9999',
                address: 'Endereço em 2 linhas',
                planName: 'Nome do Plano',
                status: 'unqualified',
            },
            {
                name: 'James Butt',
                email: 'email@email.com',
                telephone: '(31) 99999-9999',
                address: 'Endereço em 2 linhas',
                planName: 'Nome do Plano',
                status: 'unqualified',
            },
            {
                name: 'James Butt',
                email: 'email@email.com',
                telephone: '(31) 99999-9999',
                address: 'Endereço em 2 linhas',
                planName: 'Nome do Plano',
                status: 'unqualified',
            },
            {
                name: 'James Butt',
                email: 'email@email.com',
                telephone: '(31) 99999-9999',
                address: 'Endereço em 2 linhas',
                planName: 'Nome do Plano',
                status: 'unqualified',
            },
            {
                name: 'James Butt',
                email: 'email@email.com',
                telephone: '(31) 99999-9999',
                address: 'Endereço em 2 linhas',
                planName: 'Nome do Plano',
                status: 'unqualified',
            },
            {
                name: 'James Butt',
                email: 'email@email.com',
                telephone: '(31) 99999-9999',
                address: 'Endereço em 2 linhas',
                planName: 'Nome do Plano',
                status: 'unqualified',
            },
            {
                name: 'James Butt',
                email: 'email@email.com',
                telephone: '(31) 99999-9999',
                address: 'Endereço em 2 linhas',
                planName: 'Nome do Plano',
                status: 'unqualified',
            },
            {
                name: 'Nome do Contato',
                email: 'email@email.com',
                telephone: '31-93658-9696',
                address: 'Benton, John B Jr',
                planName: 'Nome do Plano',
                status: 'unqualified',
            },
           
        ];
    }

    getUsers(){
        return [
            {
                name: 'Nome do Usuário',
                email: 'E-mail',
                telephone: '31-93658-9696',
                action: 'Action'
            },
            {
                name: 'Nome do Usuário',
                email: 'E-mail',
                telephone: '31-93658-9696',
                action: 'Action'
            },
            {
                name: 'Nome do Usuário',
                email: 'E-mail',
                telephone: '31-93658-9696',
                action: 'Action'
            },
            {
                name: 'Nome do Usuário',
                email: 'E-mail',
                telephone: '31-93658-9696',
                action: 'Action'
            },
            {
                name: 'Nome do Usuário',
                email: 'E-mail',
                telephone: '31-93658-9696',
                action: 'Action'
            },
            {
                name: 'Nome do Usuário',
                email: 'E-mail',
                telephone: '31-93658-9696',
                action: 'Action'
            },
        ]
    }

    getShops(){
        return [
            {
                name: "Nome do Usuário",
                responsible: "Nome do Responsável",
                email: "email@email.com.br",
                telephone: "(31) 99999-9999",
                city: "Cidade",
                uf: "UF",
                actions: ""
            },
            {
                name: "Nome do Usuário",
                responsible: "Nome do Responsável",
                email: "email@email.com.br",
                telephone: "(31) 99999-9999",
                city: "Cidade",
                uf: "UF",
                actions: ""
            },
            {
                name: "Nome do Usuário",
                responsible: "Nome do Responsável",
                email: "email@email.com.br",
                telephone: "(31) 99999-9999",
                city: "Cidade",
                uf: "UF",
                actions: ""
            },
            {
                name: "Nome do Usuário",
                responsible: "Nome do Responsável",
                email: "email@email.com.br",
                telephone: "(31) 99999-9999",
                city: "Cidade",
                uf: "UF",
                actions: ""
            },
            {
                name: "Nome do Usuário",
                responsible: "Nome do Responsável",
                email: "email@email.com.br",
                telephone: "(31) 99999-9999",
                city: "Cidade",
                uf: "UF",
                actions: ""
            },
            {
                name: "Nome do Usuário",
                responsible: "Nome do Responsável",
                email: "email@email.com.br",
                telephone: "(31) 99999-9999",
                city: "Cidade",
                uf: "UF",
                actions: ""
            },
            {
                name: "Nome do Usuário",
                responsible: "Nome do Responsável",
                email: "email@email.com.br",
                telephone: "(31) 99999-9999",
                city: "Cidade",
                uf: "UF",
                actions: ""
            },
        ]
    }

    constructor(private http: HttpClient) {}

    getCustomersUsers(){
        return Promise.resolve(this.getUsers().slice(0, 5));
    }

    getCustomersShops(){
        return Promise.resolve(this.getShops().slice(0,5))
    }
    
    getCustomersMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    }

    getCustomers(params?: any) {
        return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();
    }
};
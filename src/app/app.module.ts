import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerService } from './service/customerservice';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PlanosComponent } from './pages/planos/planos.component';
import { PlanosDetalheComponent } from './pages/planos/planos-detalhe/planos-detalhe.component';
import { LojasComponent } from './pages/lojas/lojas.component';
import { LojasDetalheComponent } from './pages/lojas/lojas-detalhe/lojas-detalhe.component';
import { NotificacoesComponent } from './pages/notificacoes/notificacoes.component';
import { DetalheUsuarioComponent } from './pages/usuarios/detalhe-usuario/detalhe-usuario.component';


// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    ContatosComponent,
    UsuariosComponent,
    PlanosComponent,
    PlanosDetalheComponent,
    LojasComponent,
    LojasDetalheComponent,
    NotificacoesComponent,
    DetalheUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    DialogModule,
    DropdownModule,
    FileUploadModule,
    FormsModule,
    ImageModule,
    HttpClientModule,
    InputTextModule,
    ReactiveFormsModule,
    StyleClassModule,
    TableModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

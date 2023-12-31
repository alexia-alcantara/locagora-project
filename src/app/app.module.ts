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
import { MotosComponent } from './pages/motos/motos.component';
import { MotosDetalheComponent } from './pages/motos/motos-detalhe/motos-detalhe.component';


// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { PlanDetailsComponent } from './components/plan-details/plan-details.component';





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
    DetalheUsuarioComponent,
    MotosComponent,
    MotosDetalheComponent,
    PlanDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    DialogModule,
    DropdownModule,
    FileUploadModule,
    FormsModule,
    ImageModule,
    HttpClientModule,
    InputTextModule,
    PanelModule,
    ReactiveFormsModule,
    RadioButtonModule,
    StyleClassModule,
    TableModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '', component: SidebarComponent,
    children: [
      {path: 'contratos', component: ContatosComponent},
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'usuarios/editar-usuario', component: DetalheUsuarioComponent},
      {path: 'motos', component: MotosComponent},
      {path: 'motos/detalhe-moto', component: MotosDetalheComponent},
      {path: 'planos', component: PlanosComponent},
      {path: 'planos/detalhe-plano', component: PlanosDetalheComponent},
      {path: 'lojas', component: LojasComponent},
      {path: 'lojas/detalhe-loja', component: LojasDetalheComponent},
      {path: 'notificacoes', component: NotificacoesComponent},
      
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

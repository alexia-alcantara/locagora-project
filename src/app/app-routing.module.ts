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

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '', component: SidebarComponent,
    children: [
      {path: 'contatos', component: ContatosComponent},
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'planos', component: PlanosComponent},
      {path: 'planos/detalhe-plano', component: PlanosDetalheComponent},
      {path: 'lojas', component: LojasComponent},
      {path: 'lojas/detalhe-loja', component: LojasDetalheComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

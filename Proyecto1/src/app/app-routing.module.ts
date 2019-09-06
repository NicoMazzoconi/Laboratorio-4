import { UsuarioListadoComponent } from './componentes/usuario-listado/usuario-listado.component';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{path: 'inicio', component: BienvenidoComponent},
{path: 'login', component: LoginComponent},
{path: '', component: UsuarioListadoComponent}];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

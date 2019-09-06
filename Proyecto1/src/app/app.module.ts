import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule} from '@angular/forms';
import { UsuarioListadoComponent } from './componentes/usuario-listado/usuario-listado.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    UsuarioListadoComponent,
    ListadoComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

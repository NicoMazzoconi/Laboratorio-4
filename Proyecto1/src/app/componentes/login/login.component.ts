import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../clases/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  // tslint:disable-next-line: ban-types
  ingresado: Boolean;
  constructor() {
    this.usuario = new Usuario();
    this.usuario.nombre = 'pepe';
    this.usuario.clave = 'asd';
  }

  ngOnInit() {
  }

  Ingresar()
  {
    // tslint:disable-next-line: no-console
    console.info('usuario', this.usuario);

    this.ingresado = true;
  }
}

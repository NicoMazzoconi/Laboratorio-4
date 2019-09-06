import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-usuario-listado',
  templateUrl: './usuario-listado.component.html',
  styleUrls: ['./usuario-listado.component.css']
})
export class UsuarioListadoComponent implements OnInit {

  public usuario: Usuario;
  // tslint:disable-next-line: ban-types
  mod: Boolean = false;
  listadoUsuarios: Array<Usuario> = new Array<Usuario>();

  hacerAlgo($event) {
    // tslint:disable-next-line: no-console
    console.info('Objeto', $event);
    this.listadoUsuarios.push($event);
  }

  constructor() {

  }

  ngOnInit() {
  }

  modificar($event: Usuario) {
    this.usuario = $event;
    console.info("Bool", this.mod);
    this.mod = true;
    console.info("Objeto", this.usuario);
    console.info("Bool", this.mod);
  }
}

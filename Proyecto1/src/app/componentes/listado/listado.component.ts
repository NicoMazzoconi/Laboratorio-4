import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() usuarios: Array<Usuario> = new Array<Usuario>();
  @Output() modUsuario: EventEmitter<Usuario> = new EventEmitter<Usuario>();
  constructor() { }

  ngOnInit() {
  }

  modificar(usuario: Usuario) {
    this.modUsuario.emit(usuario);
  }

}

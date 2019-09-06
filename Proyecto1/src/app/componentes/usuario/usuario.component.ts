import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() completar: Usuario ;
  // tslint:disable-next-line: ban-types
  @Input() completarBool: Boolean;
  @Output() seCreo: EventEmitter<any> = new EventEmitter<any>();
  constructor() {

  }

  ngOnInit() {
    this.completar = new Usuario('', '');
    // tslint:disable-next-line: no-construct
  }

  agregarUsuario() {
    this.seCreo.emit(new Usuario(this.completar.nombre, this.completar.clave));
    this.completar = new Usuario('', '');
  }

  cancelar() {
    this.completarBool = false;
    this.completar = new Usuario('', '');
  }
}

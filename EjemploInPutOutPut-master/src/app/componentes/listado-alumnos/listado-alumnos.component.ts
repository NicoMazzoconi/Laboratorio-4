import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Alumno } from '../../clases/alumno';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {


 @Input() listadoAlumnos: Alumno[] ;
 @Output() alumnoSeleccionado: EventEmitter<any>= new EventEmitter<any>();
  constructor() {
/*
  this.listadoAlumnos = [
    { apellido: 'Aguas' ,nombre:"rogelio",legajo: 999 },
    { apellido: 'Mercurio' ,nombre:"Alfredo",legajo: 999 }
  ];*/
  }

  ngOnInit() {
  }

  mostrarDetalles(parametroAlumno:Alumno)
  {
    this.alumnoSeleccionado.emit(parametroAlumno);
  }
}

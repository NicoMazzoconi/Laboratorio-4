import {  Component, OnInit, Input ,Output,EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/clases/alumno';

@Component({
  selector: 'app-tabla-alumno',
  templateUrl: './tabla-alumno.component.html',
  styleUrls: ['./tabla-alumno.component.css']
})
export class TablaAlumnoComponent implements OnInit {

  @Input()  listadoAlumnos:Alumno[];
@Output() alumnoSeleccionado: EventEmitter<any>= new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
 mostrarDetalles(parametroAlumno)
  {
  	console.log("tabla");
    this.alumnoSeleccionado.emit(parametroAlumno);
  }
}

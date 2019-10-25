import { Component } from '@angular/core';
import { Alumno } from '../app/clases/alumno';
import { Profesor } from './clases/profesor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo  @Input()  @Output()  ';
  listadoAlumnosPrincipal: Alumno[] ;
  alumnoSeleccionado:Alumno;
  profesorParaMostrar:Profesor;
  ListadoProfesoresPrincipal:Profesor[];
mostrarAlu = true;
mostrarPro = false;
  constructor() {
        this.profesorParaMostrar= new Profesor("Clementina","Programacion",777);


        this.listadoAlumnosPrincipal = [
          { apellido: 'Aguas' ,nombre:"rogelio",legajo: 666 },
          { apellido: 'Mercurio' ,nombre:"Alfredo",legajo: 333 }
        ];

        this.ListadoProfesoresPrincipal= [
          { apellido: "Alvarez" ,materia:"matematicas",legajo: 666 },
          { apellido: "Villagran" ,materia:"prog 1",legajo: 333 }
        ];
        this.alumnoSeleccionado = this.listadoAlumnosPrincipal[0];
    }
  tomarAlumnoCreado(NuevoAlumno: Alumno)
  {
    this.listadoAlumnosPrincipal.push(NuevoAlumno);
  }
  tomarAlumnoParaDetalles(NuevoAlumno: Alumno)
  {
    this.alumnoSeleccionado=NuevoAlumno;
  }
  tomarProfesorParaDetalles(NuevoProfe: Profesor)
  {
    this.profesorParaMostrar=NuevoProfe;
  }
  mostrarProfesor(parametroProfesor:Profesor)
  {
      this.ListadoProfesoresPrincipal.push(parametroProfesor);
  }
  mostrarAlumno(parametroAlumno:Alumno){
    this.listadoAlumnosPrincipal.push(parametroAlumno);
  }

  switch(dato: boolean) {
    this.mostrarAlu = dato;
    this.mostrarPro = !dato;
  }
}

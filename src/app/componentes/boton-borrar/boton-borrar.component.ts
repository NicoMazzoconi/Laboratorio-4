import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.scss']
})
export class BotonBorrarComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  @Input() producto: number;
  constructor(public http: HttpClient) { }

  ngOnInit() {

  }

  borrar() {
    console.log(this.producto);
    this.http.post("http://localhost/SP/public/usuario/borrar", {'id':this.producto}).subscribe(res => res);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public productos = [];
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.traer().subscribe(element => {
      this.productos = element.respuesta;
      console.log(element.respuesta);
    });
  }

  traer(): Observable<any> {
    return this.http.get('http://localhost:80/SP/public/usuario/').pipe(res => res);
  }
}

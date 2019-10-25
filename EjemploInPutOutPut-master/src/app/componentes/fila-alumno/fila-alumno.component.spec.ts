import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaAlumnoComponent } from './fila-alumno.component';

describe('FilaAlumnoComponent', () => {
  let component: FilaAlumnoComponent;
  let fixture: ComponentFixture<FilaAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilaAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

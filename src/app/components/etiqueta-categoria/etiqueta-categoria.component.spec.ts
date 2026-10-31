import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtiquetaCategoriaComponent } from './etiqueta-categoria.component';

describe('EtiquetaCategoriaComponent', () => {
  let component: EtiquetaCategoriaComponent;
  let fixture: ComponentFixture<EtiquetaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtiquetaCategoriaComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EtiquetaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('categoria', 'Educació');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetaRecursComponent } from './targeta-recurs.component';

describe('TargetaRecursComponent', () => {
  let component: TargetaRecursComponent;
  let fixture: ComponentFixture<TargetaRecursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaRecursComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TargetaRecursComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('element', {
      id: 1,
      titol: 'Prova',
      descripcio: 'Descripció de prova',
      categoria: 'Educació',
      data: '2026-01-15',
      puntuacio: 4.5,
      destacat: false
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
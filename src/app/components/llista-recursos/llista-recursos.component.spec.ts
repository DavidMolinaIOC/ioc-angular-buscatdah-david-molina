import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LlistaRecursosComponent } from './llista-recursos.component';

describe('LlistaRecursos', () => {
  let component: LlistaRecursosComponent;
  let fixture: ComponentFixture<LlistaRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaRecursosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LlistaRecursosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

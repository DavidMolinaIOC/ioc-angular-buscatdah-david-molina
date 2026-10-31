import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltreRecursosComponent } from './filtre-recursos.component';

describe('FiltreRecursosComponent', () => {
  let component: FiltreRecursosComponent;
  let fixture: ComponentFixture<FiltreRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltreRecursosComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltreRecursosComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('categories', ['Educació', 'Eines']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
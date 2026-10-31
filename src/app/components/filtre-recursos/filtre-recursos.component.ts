import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtre-recursos',
  imports: [FormsModule],
  templateUrl: './filtre-recursos.component.html',
  styleUrl: './filtre-recursos.component.scss'
})
export class FiltreRecursosComponent {
  @Input({ required: true }) categories: string[] = [];

  @Output() aplicar = new EventEmitter<{ text: string; categoria: string }>();
  @Output() restablir = new EventEmitter<void>();

  textCerca: string = '';
  categoriaSeleccionada: string = '';

  // Comprova si s'han escrit menys de 3 lletres
  get textInvalid(): boolean {
    return this.textCerca.length > 0 && this.textCerca.length < 3;
  }

  onAplicar(): void {
    if (!this.textInvalid) {
      this.aplicar.emit({
        text: this.textCerca,
        categoria: this.categoriaSeleccionada
      });
    }
  }

  onRestablir(): void {
    this.textCerca = '';
    this.categoriaSeleccionada = '';
    this.restablir.emit();
  }
}
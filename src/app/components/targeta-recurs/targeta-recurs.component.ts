import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AtributTdah } from '../../models/atributs-tdah.model';
import { EtiquetaCategoriaComponent } from '../etiqueta-categoria/etiqueta-categoria.component';

@Component({
  selector: 'app-targeta-recurs',
  imports: [DatePipe, EtiquetaCategoriaComponent],
  templateUrl: './targeta-recurs.component.html',
  styleUrl: './targeta-recurs.component.scss'
})
export class TargetaRecursComponent {
  @Input({ required: true }) element!: AtributTdah;
  @Output() seleccionarElement = new EventEmitter<AtributTdah>();

  onClicDetall(): void {
    this.seleccionarElement.emit(this.element);
  }
}
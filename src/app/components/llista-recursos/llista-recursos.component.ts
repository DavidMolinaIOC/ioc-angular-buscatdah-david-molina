import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AtributTdah } from '../../models/atributs-tdah.model';
import { RECURSOS_TDAH_MOCK } from '../../data/recursos-tdah.mock';
import { FiltreRecursosComponent } from '../filtre-recursos/filtre-recursos.component';
import { TargetaRecursComponent } from '../targeta-recurs/targeta-recurs.component';

@Component({
  selector: 'app-llista-recursos',
  imports: [DatePipe, FiltreRecursosComponent, TargetaRecursComponent],
  templateUrl: './llista-recursos.component.html',
  styleUrl: './llista-recursos.component.scss'
})
export class LlistaRecursosComponent {
  elements: AtributTdah[] = RECURSOS_TDAH_MOCK;
  elementsFiltrats: AtributTdah[] = RECURSOS_TDAH_MOCK;
  elementSeleccionat: AtributTdah | null = null;

  categories: string[] = [
    'Educació',
    'Eines',
    'Família',
    'Diagnòstic',
    'Psicologia',
    'Comunitat',
    'Salut',
    'Lúdic',
    'Tràmits'
  ];

  get totalResultats(): number {
    return this.elementsFiltrats.length;
  }

  aplicarFiltres(filtre: { text: string; categoria: string; nomesDestacats: boolean }): void {
    const textMin = filtre.text.toLowerCase();

    this.elementsFiltrats = this.elements.filter(el => {
      const coincideixText =
        textMin === '' ||
        el.titol.toLowerCase().includes(textMin) ||
        el.descripcio.toLowerCase().includes(textMin);

      const coincideixCategoria =
        filtre.categoria === '' || el.categoria === filtre.categoria;

      const coincideixDestacat =
        !filtre.nomesDestacats || el.destacat === true;

      return coincideixText && coincideixCategoria && coincideixDestacat;
    });
  }

  restablirFiltres(): void {
    this.elementsFiltrats = this.elements;
  }

  onSeleccionarElement(element: AtributTdah): void {
    this.elementSeleccionat = element;
  }
}
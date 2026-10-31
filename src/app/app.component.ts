import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LlistaRecursosComponent } from './components/llista-recursos/llista-recursos.component';


@Component({
  imports: [RouterOutlet, LlistaRecursosComponent],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {

  //añadimos el nombre publico
  public nomApp: string = 'BuscaTDAH';
  
  protected readonly title = signal('ioc-angular-buscatdah-david-molina');
}

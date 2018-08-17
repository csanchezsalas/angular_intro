import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 50; // se utilizará este attr en el html
  progreso2: number = 35;
  constructor() { }

  ngOnInit() {
  }
  /*
  en el TYPESCRIPT: 
  actualizar(event: number){
    console.log('Evento: ', event);
  }
  en el HTML:
  aquí veo cómo se llama a un evento @output de incrementador.comp en progress.comp.html, el cual puede
  llamar a una funcion "actualizar()" definida en el progress.ts
  <app-incrementador (cambioValor)="actualizar($event)" leyenda="Progreso Azul" [progreso]="progreso1"></app-incrementador>
 */

}

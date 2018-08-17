import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef; // se va referenciar un elemento html
  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter(); // emisor de eventos (numéricos)
  constructor()
  {
    console.log('Leyenda: ', this.leyenda);
    console.log('Progreso: ', this.progreso);
  }

  ngOnInit() {
    console.log('Leyenda: ', this.leyenda);
    console.log('Progreso: ', this.progreso);
  }
  onChanges(newValue: number){
    console.log(newValue);
    // se puede referenciar así directamente
    // let elemHTML: any = document.getElementsByName('progreso')[0];
    // ó se usa el  txtProgress el cual tiene en sí un atributo nativeElement que despliega el valor a modificar
    this.txtProgress.nativeElement.value = this.progreso;

    if (newValue > 100) {
      this.progreso = 100;
    }else if (newValue < 0) {
      this.progreso = 0;
    }else {
      this.progreso = newValue;
    }
    // elemHTML.value = Number(this.progreso);
    this.cambioValor.emit(this.progreso);
  }
  cambiarValor(valor: number){
    this.progreso = this.progreso + valor;
    if (this.progreso > 100)
    {
      this.progreso = 100;
      return;
    }
    if (this.progreso < 0)
    {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit( this.progreso ); // esto emite el evento
    this.txtProgress.nativeElement.focus();
  }

}

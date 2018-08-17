import { Component, OnInit } from '@angular/core';
declare function init_plugins();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
    /* esta función inicializa todos los plugins necesarios
     para esto se debió abrir el js y crear un función global q encerrara todas las inicializaciones
     de los plugins, seguidamente se inicializaba en los archivos que fueran necesarios
     en este caso en el login componen  y en las paginas component (ya q aquí encierra todas las pág
     que usa nuestra aplicación) */
  }

}

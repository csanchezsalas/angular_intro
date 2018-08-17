import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
    init_plugins();
    /* esta función inicializa todos los plugins necesarios
     para esto se debió abrir el js (custom.js, el cual se encuentra en el index.html de
     nuestro proyecto) y crear un función global q encerrara todas las inicializaciones
     de los plugins, seguidamente se inicializaba en los archivos que fueran necesarios
     en este caso en el login componen  y en las paginas component (ya q aquí encierra todas las pág
     que usa nuestra aplicación). Ahora al pasar de la pág log in al dashboard se pueden
     inicializar todos los plugins necesarios para el correcto funcionamiento de la app */
  }
  ingresar(){
    console.log('INGRESANDO...');
    this.router.navigate(['/dashboard']); // navegador utilizando router...
  }

}

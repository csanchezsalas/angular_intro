import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
// comentado está para referencias elementos html de manera alternativa:
// ver servicio de settings
// inyectando como un service
// al mismo tiempo decimos a este componenete q utilizará los servicios de configuración:
  constructor(/*@Inject(DOCUMENT) private _document, */ public _ajustes: SettingsService) { }

  ngOnInit() {
  }
  cambiarColor(tema: string, link: any) {
    /* console.log(link);
    
    let url = `assets/css/colors/${ tema }.css`; // estas comillas se utilizan para hacer un "template LITERAL"
    this._document.getElementById('tema').setAttribute('href', url); 
    
    // aquí puedo utilizar mi servicio ya "importado" en el componente
    this._ajustes.ajustes.tema = tema;
    this._ajustes.ajustes.temaUrl = url;

    this._ajustes.guardarAjustes();*/
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema); // utilización del SERVICE
  }
  aplicarCheck(link:any){
    let selectores : any = document.getElementsByClassName('selector'); // obtiene todos los selectores del html ref
    /* logic: se quita la clase working (clase que muestra el check seleccionado) de todos los selectores
    después se le agrega a la var LINK que tiene el elemento seleccionado */
    for ( let ref of selectores ){
      ref.classList.remove('working'); // a cada uno de los links le quita la clase working
    }
    link.classList.add('working'); // agrega a la link la clase working
  }
  colocarCheck(){
    let selectores : any = document.getElementsByClassName('selector'); // obtiene todos los selectores del html ref
    let tema  = this._ajustes.ajustes.tema;
    for ( let ref of selectores ){
      if(ref.getAttribute('data-theme') === tema){ // REFERENCIANDO ATRIBUTOS DE HTML CON JAVASCRIPT
        ref.classList.add('working');
        break;
      }
    }
  }
}

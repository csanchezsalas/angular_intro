import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {
  // acá se puede declarar vars de tipo interface as classes
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'

  };
  // esta inyección del documento html es para poder referencias elementos del mismo
  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
   }
  guardarAjustes(){
    /* básicamente, se convierte el objeto ajustes a string con JSON ya que el
     localstorage solo almacena en formato string, 'ajustes' es la llave con q se guarda */
    // console.log('SAVED LOCALSTORAGE');
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
  }
  cargarAjustes() {
    if ( localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
      // console.log('LOADING FROM LOCALSTORAGE...');
      this.aplicarTema(this.ajustes.tema);
    }else{
      // console.log( 'LOADING DEFAULT...');
      this.aplicarTema(this.ajustes.tema);
    }
  }
  aplicarTema(tema: string){
    let url = `assets/css/colors/${ tema }.css`; // estas comillas se utilizan para hacer un "template LITERAL"
    this._document.getElementById('tema').setAttribute('href', url);
    // ya no se hace la referencia porque está dentro del mismo contexto (ver referencia en account-settings.ts)
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }

}
// interface limita las reglas que se va utilizar en este servicio
// variables
interface Ajustes {
  temaUrl: string;
  tema: string;
}
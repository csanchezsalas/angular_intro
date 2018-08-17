import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// carga inicial de la página:
export class AppComponent {
  /* puedo crear mi propio constructor cuando lo amerite:
   nota: con solo inyectar el servicio en el constructor del "main" se dispara el constructor
   del servicio (ver constructor SettingsService) */
  constructor( public _ajustes: SettingsService ){

  }
}

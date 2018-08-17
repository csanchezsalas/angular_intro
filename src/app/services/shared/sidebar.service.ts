import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  // creando herramientas para el servicio sidebar
  // arreglo de objetos:
  menu: any = [
    { // llaves indican objetos..
      titulo: 'Principal',
      icono: 'mdi mdi-gauge', // from assets
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' }
      ]
    }
  ];
  constructor() { }

}

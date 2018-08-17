import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  
  // Hint: Al inyecta este servicio ya se puede accesar a 'menu' (attr de SidebarService)
  constructor( public _sidebar: SidebarService ) { }

  ngOnInit() {
  }

}

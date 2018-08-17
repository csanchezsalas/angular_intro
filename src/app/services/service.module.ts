import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// se importan los servicios desde el index que está exportando cada uno
import { SettingsService, SidebarService, SharedService } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [SettingsService, SidebarService, SharedService], // inicializador
  declarations: []
})
export class ServiceModule { }

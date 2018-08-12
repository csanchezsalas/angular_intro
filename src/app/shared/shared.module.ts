import { NgModule } from '@angular/core';
import { HeaderComponent } from 'app/shared/header/header.component';
import { SidebarComponent } from 'app/shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from 'app/shared/breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from 'app/shared/nopagefound/nopagefound.component';
/* import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component'; */

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ]
})
export class SharedModule { }
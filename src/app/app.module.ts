import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu.component';
import { ComentariojuegoService } from './service/comentariojuego.service';
import { JuegoService } from './service/juego.service';
import { UsuarioService } from './service/usuario.service';
import { ValoracionjuegoService } from './service/valoracionjuego.service';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { UsuarioDetailAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-detail-admin-unrouted/usuario-detail-admin-unrouted.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-remove-admin-routed/usuario-remove-admin-routed.component';
import { JuegoViewAdminRoutedComponent } from './component/application/juego/routed/juego-view-admin-routed/juego-view-admin-routed.component';
import { JuegoEditAdminRoutedComponent } from './component/application/juego/routed/juego-edit-admin-routed/juego-edit-admin-routed.component';
import { JuegoNewAdminRoutedComponent } from './component/application/juego/routed/juego-new-admin-routed/juego-new-admin-routed.component';
import { JuegoPlistAdminRoutedComponent } from './component/application/juego/routed/juego-plist-admin-routed/juego-plist-admin-routed.component';
import { JuegoRemoveAdminRoutedComponent } from './component/application/juego/routed/juego-remove-admin-routed/juego-remove-admin-routed.component';
import { JuegoDetailAdminUnroutedComponent } from './component/application/juego/unrouted/admin/juego-detail-admin-unrouted/juego-detail-admin-unrouted.component';
import { ComentariojuegoViewAdminRoutedComponent } from './component/application/comentariojuego/routed/comentariojuego-view-admin-routed/comentariojuego-view-admin-routed.component';
import { ComentariojuegoEditAdminRoutedComponent } from './component/application/comentariojuego/routed/comentariojuego-edit-admin-routed/comentariojuego-edit-admin-routed.component';
import { ComentariojuegoNewAdminRoutedComponent } from './component/application/comentariojuego/routed/comentariojuego-new-admin-routed/comentariojuego-new-admin-routed.component';
import { ComentariojuegoPlistAdminRoutedComponent } from './component/application/comentariojuego/routed/comentariojuego-plist-admin-routed/comentariojuego-plist-admin-routed.component';
import { ComentariojuegoRemoveAdminRoutedComponent } from './component/application/comentariojuego/routed/comentariojuego-remove-admin-routed/comentariojuego-remove-admin-routed.component';
import { ComentariojuegoDetailAdminUnroutedComponent } from './component/application/comentariojuego/unrouted/comentariojuego-detail-admin-unrouted/comentariojuego-detail-admin-unrouted.component';
import { ValoracionjuegoViewAdminRoutedComponent } from './component/application/valoracionjuego/routed/valoracionjuego-view-admin-routed/valoracionjuego-view-admin-routed.component';
import { ValoracionjuegoEditAdminRoutedComponent } from './component/application/valoracionjuego/routed/valoracionjuego-edit-admin-routed/valoracionjuego-edit-admin-routed.component';
import { ValoracionjuegoNewAdminRoutedComponent } from './component/application/valoracionjuego/routed/valoracionjuego-new-admin-routed/valoracionjuego-new-admin-routed.component';
import { ValoracionjuegoPlistAdminRoutedComponent } from './component/application/valoracionjuego/routed/valoracionjuego-plist-admin-routed/valoracionjuego-plist-admin-routed.component';
import { ValoracionjuegoRemoveAdminRoutedComponent } from './component/application/valoracionjuego/routed/valoracionjuego-remove-admin-routed/valoracionjuego-remove-admin-routed.component';
import { ValoracionjuegoDetailAdminUnroutedComponent } from './component/application/valoracionjuego/unrouted/valoracionjuego-detail-admin-unrouted/valoracionjuego-detail-admin-unrouted.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    UsuarioViewAdminRoutedComponent,
    UsuarioEditAdminRoutedComponent,
    UsuarioNewAdminRoutedComponent,
    UsuarioPlistAdminRoutedComponent,
    UsuarioRemoveAdminRoutedComponent,
    UsuarioDetailAdminUnroutedComponent,
    JuegoViewAdminRoutedComponent,
    JuegoEditAdminRoutedComponent,
    JuegoNewAdminRoutedComponent,
    JuegoPlistAdminRoutedComponent,
    JuegoRemoveAdminRoutedComponent,
    JuegoDetailAdminUnroutedComponent,
    ComentariojuegoViewAdminRoutedComponent,
    ComentariojuegoEditAdminRoutedComponent,
    ComentariojuegoNewAdminRoutedComponent,
    ComentariojuegoPlistAdminRoutedComponent,
    ComentariojuegoRemoveAdminRoutedComponent,
    ComentariojuegoDetailAdminUnroutedComponent,
    ValoracionjuegoViewAdminRoutedComponent,
    ValoracionjuegoEditAdminRoutedComponent,
    ValoracionjuegoNewAdminRoutedComponent,
    ValoracionjuegoPlistAdminRoutedComponent,
    ValoracionjuegoRemoveAdminRoutedComponent,
    ValoracionjuegoDetailAdminUnroutedComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule    
  ],
  providers: [
    ComentariojuegoService,
    JuegoService,
    UsuarioService,
    ValoracionjuegoService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

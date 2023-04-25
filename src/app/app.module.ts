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
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    UsuarioViewAdminRoutedComponent
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

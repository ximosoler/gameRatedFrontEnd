import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-remove-admin-routed/usuario-remove-admin-routed.component';
import { UsuarioDetailAdminUnroutedComponent } from './component/application/usuario/unrouted/admin/usuario-detail-admin-unrouted/usuario-detail-admin-unrouted.component';
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


const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'home', component: HomeComponent, title: 'Home' },



  { path: 'admin/usuario/view/:id', component: UsuarioViewAdminRoutedComponent, title: 'Vista de usuarios' },
  { path: 'admin/usuario/edit/:id', component: UsuarioEditAdminRoutedComponent, title: 'Editar usuario'},
  { path: 'admin/usuario/new', component: UsuarioNewAdminRoutedComponent, title: 'Nuevo usuario' },
  { path: 'admin/usuario/plist/usuario/:id', component: UsuarioPlistAdminRoutedComponent, title: 'Listado de usuarios'},
  { path: 'admin/usuario/remove/:id', component: UsuarioRemoveAdminRoutedComponent, title: 'Borrar usuario'},

  { path: 'admin/usuario/detail/:id', component: UsuarioDetailAdminUnroutedComponent, title: 'Detalles de usuario'},


  { path: 'admin/juego/view/:id', component: JuegoViewAdminRoutedComponent, title: 'Vista de juego' },
  { path: 'admin/juego/edit/:id', component: JuegoEditAdminRoutedComponent, title: 'Editar juego'},
  { path: 'admin/juego/new', component: JuegoNewAdminRoutedComponent, title: 'Nuevo juego' },
  { path: 'admin/juego/plist/juego/:id', component: JuegoPlistAdminRoutedComponent, title: 'Listado de juegos'},
  { path: 'admin/juego/remove/:id', component: JuegoRemoveAdminRoutedComponent, title: 'Borrar juego'},

  { path: 'admin/juego/detail/:id', component: JuegoDetailAdminUnroutedComponent, title: 'Detalles de juego'},


  { path: 'admin/comentariojuego/view/:id', component: ComentariojuegoViewAdminRoutedComponent, title: 'Vista de comentarios' },
  { path: 'admin/comentariojuego/edit/:id', component: ComentariojuegoEditAdminRoutedComponent, title: 'Editar comentario'},
  { path: 'admin/comentariojuego/new', component: ComentariojuegoNewAdminRoutedComponent, title: 'Nuevo comentario' },
  { path: 'admin/comentariojuego/plist/comentariojuego/:id', component: ComentariojuegoPlistAdminRoutedComponent, title: 'Listado de comentarios'},
  { path: 'admin/comentariojuego/remove/:id', component: ComentariojuegoRemoveAdminRoutedComponent, title: 'Borrar comentario'},

  { path: 'admin/comentariojuego/detail/:id', component: ComentariojuegoDetailAdminUnroutedComponent, title: 'Detalles de comentario'},


  { path: 'admin/valoracionjuego/view/:id', component: ValoracionjuegoViewAdminRoutedComponent, title: 'Vista de valoraciones' },
  { path: 'admin/valoracionjuego/edit/:id', component: ValoracionjuegoEditAdminRoutedComponent, title: 'Editar valoracion'},
  { path: 'admin/valoracionjuego/new', component: ValoracionjuegoNewAdminRoutedComponent, title: 'Nueva valoracion' },
  { path: 'admin/valoracionjuego/plist/valoracionjuego/:id', component: ComentariojuegoPlistAdminRoutedComponent, title: 'Listado de valoraciones'},
  { path: 'admin/valoracionjuego/remove/:id', component: ComentariojuegoRemoveAdminRoutedComponent, title: 'Borrar valoracion'},

  { path: 'admin/valoracionjuego/detail/:id', component: ComentariojuegoDetailAdminUnroutedComponent, title: 'Detalles de valoracion'}




  



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {



 }


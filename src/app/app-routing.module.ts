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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },



  { path: 'admin/usuario/view/:id', component: UsuarioViewAdminRoutedComponent },
  { path: 'admin/usuario/edit/:id', component: UsuarioEditAdminRoutedComponent},
  { path: 'admin/usuario/new', component: UsuarioNewAdminRoutedComponent },
  { path: 'admin/usuario/plist/usuario/:id', component: UsuarioPlistAdminRoutedComponent},
  { path: 'admin/usuario/remove/:id', component: UsuarioRemoveAdminRoutedComponent},

  { path: 'user/usuario/detail/:id', component: UsuarioDetailAdminUnroutedComponent},


  { path: 'admin/juego/view/:id', component: JuegoViewAdminRoutedComponent},
  { path: 'admin/juego/edit/:id', component: JuegoEditAdminRoutedComponent},
  { path: 'admin/juego/new', component: JuegoNewAdminRoutedComponent},
  { path: 'admin/juego/plist/juego/:id', component: JuegoPlistAdminRoutedComponent},
  { path: 'admin/juego/remove/:id', component: JuegoRemoveAdminRoutedComponent},

  { path: 'admin/juego/detail/:id', component: JuegoDetailAdminUnroutedComponent},


  



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {



 }


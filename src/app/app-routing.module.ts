import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloListComponent } from './articulo-list/articulo-list.component';
import { ArticuloFormComponent } from './articulo-form/articulo-form.component';
import { UsuariosComponent } from './Login/usuarios/usuarios.component';
import { UsuarioFormComponent } from './Login/usuarios-form/usuarios-form.component';
import { UsuariosEditarComponent } from './Login/usuarios-editar/usuarios-editar.component';
import { LoginiComponent } from './logini/logini.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'articulos', component: ArticuloListComponent },
  { path: 'articulos/new', component: ArticuloFormComponent },
  { path: 'articulos/edit/:id', component: ArticuloFormComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/new', component: UsuarioFormComponent }, // Ruta para el formulario de nuevo usuario
  { path: 'usuarios/edit/:id', component: UsuariosEditarComponent },
  { path: 'login', component: LoginiComponent },
  { path: 'menu', component: MenuComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticuloListComponent } from './articulo-list/articulo-list.component';
import { ArticuloFormComponent } from './articulo-form/articulo-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ArticuloEditarComponent } from './articulo-editar/articulo-editar.component';
import { UsuariosComponent } from './Login/usuarios/usuarios.component';
import { UsuarioFormComponent } from './Login/usuarios-form/usuarios-form.component';
import { UsuariosEditarComponent } from './Login/usuarios-editar/usuarios-editar.component';
import { LoginiComponent } from './logini/logini.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NavarComponent } from './Component/navar/navar.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    ArticuloListComponent,
    ArticuloFormComponent,
    ArticuloEditarComponent,
    UsuariosComponent,
    UsuarioFormComponent,
    UsuariosEditarComponent,
    LoginiComponent,
    MenuComponent,
    NavarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [ provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }

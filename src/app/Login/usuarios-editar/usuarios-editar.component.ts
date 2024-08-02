import { UsuariosService } from './../../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-editar',
  templateUrl: './usuarios-editar.component.html',
  styleUrls: ['./usuarios-editar.component.css']
})
export class UsuariosEditarComponent implements OnInit {
  usuarioForm: FormGroup;
  id?: number;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private UsuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.usuarioForm = this.fb.group({
      name: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    if (this.id) {
      this.UsuariosService.getUsuario(this.id).subscribe(
        data => {
          this.usuarioForm.patchValue(data);
        },
        error => {
          this.errorMessage = `Error al cargar el usuario: ${error}`;
        }
      );
    }
  }

  onSubmit(): void {
    if (this.usuarioForm.invalid) {
      alert('Por favor, complete el formulario correctamente.');
      return;
    }

    if (this.id) {
      this.UsuariosService.updateUsuario(this.id, this.usuarioForm.value).subscribe(
        () => {
          alert('Usuario actualizado con éxito.');
          this.router.navigate(['/usuarios']);
        },
        error => {
          this.errorMessage = `Error al actualizar el usuario: ${error}`;
        }
      );
    } else {
      this.UsuariosService.createUsuario(this.usuarioForm.value).subscribe(
        () => {
          alert('Usuario creado con éxito.');
          this.router.navigate(['/usuarios']);
        },
        error => {
          this.errorMessage = `Error al crear el usuario: ${error}`;
        }
      );
    }
  }
}

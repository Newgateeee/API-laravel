import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-articulo-editar',
  templateUrl: './articulo-editar.component.html',
  styleUrls: ['./articulo-editar.component.css']
})
export class ArticuloEditarComponent implements OnInit {
  articuloForm: FormGroup;
  id?: number;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private articuloService: ArticuloService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.articuloForm = this.fb.group({
      name: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      unidad: ['', [Validators.required]],
      stock: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    if (this.id) {
      this.articuloService.getArticulo(this.id).subscribe(
        data => {
          this.articuloForm.patchValue(data);
        },
        error => {
          this.errorMessage = `Error al cargar el artículo: ${error}`;
        }
      );
    }
  }

  onSubmit(): void {
    if (this.articuloForm.invalid) {
      alert('Por favor, complete el formulario correctamente.');
      return;
    }

    if (this.id) {
      this.articuloService.updateArticulo(this.id, this.articuloForm.value).subscribe(
        () => {
          alert('Artículo actualizado con éxito.');
          this.router.navigate(['/articulos']);
        },
        error => {
          this.errorMessage = `Error al actualizar el artículo: ${error}`;
        }
      );
    } else {
      this.articuloService.createArticulo(this.articuloForm.value).subscribe(
        () => {
          alert('Artículo creado con éxito.');
          this.router.navigate(['/articulos']);
        },
        error => {
          this.errorMessage = `Error al crear el artículo: ${error}`;
        }
      );
    }
  }
}

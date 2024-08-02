import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.css']
})
export class ArticuloListComponent implements OnInit {
  articulos: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'Description', 'unidad', 'stock', 'price', 'actions'];

  constructor(private articuloService: ArticuloService) {}

  ngOnInit(): void {
    this.loadArticulos();
  }

  loadArticulos(): void {
    this.articuloService.getArticulos().subscribe(data => {
      this.articulos = data;
    });
  }

  deleteArticulo(id: number): void {
    this.articuloService.deleteArticulo(id).subscribe(() => {
      this.loadArticulos();
    });
  }
}

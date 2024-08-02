import { UsuariosService } from './../../usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'usuario','pass', 'acciones'];

  constructor(private UsuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios(): void {
    this.UsuariosService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  deleteUsuario(id: number): void {
    this.UsuariosService.deleteUsuario(id).subscribe(() => {
      this.loadUsuarios();
    });
  }
}

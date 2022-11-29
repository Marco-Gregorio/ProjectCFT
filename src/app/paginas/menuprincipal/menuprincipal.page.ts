import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormularioService } from '../../servicios/formulario.service';

interface Componente {
  icono: string;
  nombre: string;
  direccion: string;
}

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.page.html',
  styleUrls: ['./menuprincipal.page.scss'],
})
export class MenuprincipalPage implements OnInit {

  componentes: Componente [] = [
    {
      icono: 'clipboard-outline',
      nombre: 'Salas y laboratorios',
      direccion: "/salasylaboratorios",
    },
    {
      icono: 'clipboard-outline',
      nombre: 'Tomar salas/lab',
      direccion: "/tomarsalalab",
    },
    {
      icono: 'clipboard-outline',
      nombre: 'Desocupar sala/lab',
      direccion: "/desocuparsalalab",
    },
    {
      icono: 'clipboard-outline',
      nombre: 'Agregar sala/lab',
      direccion: "/agregarsala",
    },
    {
      icono: 'clipboard-outline',
      nombre: 'Configuración',
      direccion: "/configuracion",
    },
    {
      icono: 'clipboard-outline',
      nombre: 'Perfil',
      direccion: "/perfil",
    },

  ]

  constructor() { }

  ngOnInit() {
  }
}


import { Component, OnInit } from '@angular/core';
import { identity } from 'rxjs';
//importar servicio
import {FormularioService} from 'src/app/servicios/formulario.service';

export class EnviarDatos {
  
  constructor(
    public idcodigo: string,
    public nombre: string,
    public capacidad: string,
    public descripcion: string,
    public direccion: string,
    public establecimiento: string,
  ) {}

}

@Component({
  selector: 'app-agregarsala',
  templateUrl: './agregarsala.page.html',
  styleUrls: ['./agregarsala.page.scss'],
})
export class AgregarsalaPage implements OnInit {

  datos_formulario;

  constructor(private formularioService: FormularioService) { 
    this.datos_formulario = new EnviarDatos("dato 1","dato 2","dato 3","dato 4","dato 5","dato 6");
  }

  ngOnInit() {
  }

  EnviarDatos()  {
    this.formularioService.registrarFormulario(this.datos_formulario).subscribe(
      (response:any)=>{
        if(response.registro){
        alert("datos registrados correctamente")
        }else{
        alert("datos NO registrados")
        }
    },
    error=>{
      alert("error en registrar datos")
    }
    )
   
    console.log("Datos del formulario: ", this.datos_formulario);
  } 
}

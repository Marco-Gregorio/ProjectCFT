import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/servicios/formulario.service';

@Component({
  selector: 'app-salasylaboratorios',
  templateUrl: './salasylaboratorios.page.html',
  styleUrls: ['./salasylaboratorios.page.scss'],
})
export class SalasylaboratoriosPage implements OnInit {

  constructor(private formularioService : FormularioService) { }
  datos_obtenidos;

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.obtenerDatosSalas();
  }
  obtenerDatosSalas (){
    this.formularioService.obtenerDatosSalas().subscribe(
      (Response:any)=> {
        this.datos_obtenidos = Response.registro;
        console.log(this.datos_obtenidos)
      },
      error=>{
        alert("error en la peticion");
      }
    );
  }

}

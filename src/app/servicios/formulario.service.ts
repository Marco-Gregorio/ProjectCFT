import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  backend = environment.backend+"/registroForm";
  constructor(private http: HttpClient) { }

//funcion registrar datos al formulario
registrarFormulario(datos_formulario){
  return this.http.post(`${this.backend}/crear-registro`,datos_formulario);
}
//funcion listar
obtenerDatosSalas(){
  return this.http.get(`${this.backend}/obtener-salas`);
}

}

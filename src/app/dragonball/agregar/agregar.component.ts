import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces.ts/dragonball.interface';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

 
  nuevopersonaje : Personaje ={
    nombre: 'goku',
    poder: 0
  }

  // creando un evento personalizado
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter()

  agregarheroe(){
    if(!this.nuevopersonaje.nombre){
      return alert("debe introducir un personaje")
    }
    if(!this.nuevopersonaje.poder){
      return alert("debe introducir la cantidad de poder")
    }
    // this.heroesdbz.push(this.nuevopersonaje)
    console.log(this.nuevopersonaje)
    
    // definiendo lo que emitira el evento
    this.onNuevoPersonaje.emit(this.nuevopersonaje)
    this.nuevopersonaje = {nombre:"",poder:0}
  }
  

}

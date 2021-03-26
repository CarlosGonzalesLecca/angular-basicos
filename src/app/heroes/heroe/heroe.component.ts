import { Component } from '@angular/core';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{
    nombre: string = "Ironman";
    edad: number = 44;
    get nombreenmayuscula():string{
        return this.nombre.toUpperCase()
    }

    obtenernombre():String{
        return `ni nombre es ${this.nombre} y mi edad es ${this.edad}`
    }
    cambiarnombre():string{
       return this.nombre = "Spiderman"
    }
    cambiaredad(){
        return this.edad = 30
    }
}
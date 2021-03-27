import { Component } from '@angular/core';
import { Personaje } from '../interfaces.ts/dragonball.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

    
  heroesdbz : Personaje[]= [
    // {
    //   nombre: "Goku",
    //   poder: 50000
    // },    
  ]     
  agregarnuevopersonaje(argumento:Personaje){
    this.heroesdbz.push(argumento)
  }
  
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes : string[] = ["Ironman","Spiderman","Hulk","Thor","Capitan America"]
  b : string|string[]  = ''
  borrarheroe(){    
    this.b = (this.heroes.pop())||''
  }  
}

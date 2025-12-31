import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente04',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente04.component.html',
  styleUrl: './componente04.component.css'
})
export class Componente04Component {
  //variavel para exibir ou ocultar o quadrado
  exbiirQuadrado: boolean = false;

  //função para exibir ou ocultar o quadrado
  acao(){
    if(this.exbiirQuadrado === true){
      this.exbiirQuadrado = false;
    } else {
      this.exbiirQuadrado = true;
    }
  }
}

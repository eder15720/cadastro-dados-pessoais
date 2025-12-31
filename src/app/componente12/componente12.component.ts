import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
  selector: 'app-componente12',
  standalone: true,
  imports: [CommonModule, MediaPipe],
  templateUrl: './componente12.component.html',
  styleUrl: './componente12.component.css'
})
export class Componente12Component {
  
  nome:string = 'Henrique'
  obj:any = {'nome':'Henrique', 'idade': 28};

  alunos:any = [
    {nome:'Bruno', 'nota1': 8, 'nota2': 9},
    {nome:'Julio', 'nota1': 7, 'nota2': 5},
    {nome:'Ana', 'nota1': 9, 'nota2': 8},
    {nome:'Carlos', 'nota1': 6, 'nota2': 7}
  ];

}

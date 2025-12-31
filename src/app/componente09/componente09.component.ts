import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente09',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './componente09.component.html',
  styleUrl: './componente09.component.css'
})
export class Componente09Component {
  nome:string ='';
  cidade:string ='';
}

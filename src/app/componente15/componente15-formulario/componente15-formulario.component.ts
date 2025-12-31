import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente15-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente15-formulario.component.html',
  styleUrl: './componente15-formulario.component.css'
})
export class Componente15FormularioComponent {

  //variavel para armazenar o nome informado
  nome:string = '';

  //output
  @Output() funcao = new EventEmitter<string>();

  //função de cadastro do componente de formulário
  cadastrarNome(){
    this.funcao.emit(this.nome);
  }

}

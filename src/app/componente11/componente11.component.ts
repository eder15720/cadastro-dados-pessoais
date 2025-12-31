import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

  //Objeto de formulario
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  // visibilidade dos botoes 
  btnCadastrar:boolean = true;

  //Vetor
  vetor: Pessoa[] = [];

  //armazenar indice da pessoa selecionada
  indice:number = -1;

  //função de cadastro
  cadastrar(){
  
  // cadastro no vetor
  this.vetor.push(this.formulario.value as Pessoa);

  //limpeza dos inputs
  this.formulario.reset();

  //visualização via console
  //console.table(this.vetor);

  }

  //função de selação
  selecionar(indice: number){
    // atribuir indice da pessoa
    this.indice = indice;

    //atribuir os dados da pessoa no formulario
    this.formulario.setValue({nome: this.vetor[indice].nome,
                              idade: this.vetor[indice].idade,
                              cidade: this.vetor[indice].cidade});

    //visibilidade dos botoes
    this.btnCadastrar = false;
    
    }

    // função de alteração
    alterar(){

      //alter vetor
      this.vetor[this.indice] = this.formulario.value as Pessoa;

      //limpar os inputts
      this.formulario.reset();

      //visibilidade dos botoes
      this.btnCadastrar = true;
    }

    excluir(){
      // remover pessoa do vetor
      this.vetor.splice(this.indice, 1);

      //limpeza dos inputs
      this.formulario.reset();

      //visibilidade dos botoes
      this.btnCadastrar = true;
    }


    cancelar(){
      //limpeza dos inputs
      this.formulario.reset();

      //visibiilidade dos botoes
      this.btnCadastrar = true;
      
    }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {

  //vetor 
  vetor:Produto[] = [];

  //visibilidade dos botoes
  btnCadastrar:boolean = true;

  //objeto de formulário
  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  });

  //construtor
  constructor(private servico: ProdutoService){}

  //inicialização do componente
  ngOnInit(): void {
    this.selecionar();
  }

  // metodo para seleclonar todos os produtos
  selecionar(){
    this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});
  }

  // método para cadastrar produtos
  cadastrar(){
    this.servico.cadastrar(this.formulario.value as Produto)
    .subscribe(retorno => {
      this.vetor.push(retorno);
      this.formulario.reset();
    })
  }

  // metodo para selecionar produto específico
  selecionarProduto(indice:number){
    this.formulario.setValue({
      id: this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor
    });

    this.btnCadastrar = false;
  
  }

  // metodo para alterar produtos
  alterar(){
    this.servico.alterar(this.formulario.value as Produto).subscribe(retorno => {
      //obter o indice do objeto alterado
      let indiceAlterado = this.vetor.findIndex(obj => {
        return this.formulario.value.id == obj.id;
      });

      //alterando o vetor 
      this.vetor[indiceAlterado] = retorno;

      //limpar o formulario
      this.formulario.reset();

      //visibiilidade dos botões
      this.btnCadastrar = true;

    });
  }

  // metodo para remover produtos
  remover(){
    this.servico.remover(this.formulario.value.id).subscribe(() => {
      //obter o indice do vetor que será removido
      let indiceRemovido = this.vetor.findIndex(obj => {
        return obj.id === this.formulario.value.id;
      });

      //remover do vetor
      this.vetor.splice(indiceRemovido, 1);

      //limpar o formulario
      this.formulario.reset();

      //visibilidade dos botoes
      this.btnCadastrar = true;

    });
  }
}

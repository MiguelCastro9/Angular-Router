import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  p1: any = {
    nome: 'Processador',
    valor: '1.500',
    quantidade: '1'
  };

  p2: any = {
    nome: 'Monitor',
    valor: '1.000',
    quantidade: '2'
  };

  p3: any = {
    nome: 'Memória Ram',
    valor: '400',
    quantidade: '2'
  };

  constructor() { }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css'],
})
export class ListThoughtComponent implements OnInit {
  listThoughts = [
    {
      content: 'I Love Coca-Cola',
      authorship: 'Vê',
      model: 'modelo1',
    },
    {
      content: 'Passo intormações para o componente filho',
      authorship: 'Componente pai',
      model: 'modelo2',
    },
    {
      content: 'Minha propriedade é decorada com @Input',
      authorship: 'Componente filho',
      model: 'modelo3',
    },
    {
      content: `Se hoje é o dia das crianças...
                Ontem eu disse: o dia da criança é o dia da mãe, dos pais, das professoras,
                mas também é o dia dos animais, sempre que você olha uma criança,
                há sempre uma figura oculta, que é um cachorro atrás.
                O que é algo muito importante!`,
      authorship: 'ngClass - Dilma',
      model: 'modelo2',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

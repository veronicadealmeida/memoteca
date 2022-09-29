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
  ];
  constructor() {}

  ngOnInit(): void {}
}

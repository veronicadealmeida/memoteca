import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  thought = {
    id: 1,
    content: 'Apendendo Angular',
    authorship: 'Dev',
    model: 'modelo2',
  };

  constructor() {}

  ngOnInit(): void {}

  createThought() {
    alert('criar');
  }

  cancelThought() {
    alert('cancelar');
  }
}

import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('fade',[
      state('void', style({ opacity:0})),
      transition(':enter, :leave',[  //or we can use this bidirectional operator void <=> * instead of :enter, : leave
        animate(2000)
      ])
    ])
  ]
})

export class TodosComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}

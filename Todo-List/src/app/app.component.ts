import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo-List';
  todoItems: string[] = [];
  completedItems: string[] = [];

  onSubmit(form: NgForm) {
    console.log('clicked');
    this.todoItems.push(form.value.todoItem);
    form.reset();
  }
  onAction(event: { index: number; action: string }) {
    console.log('delete');

    if (event.action === 'complete') {
      this.completedItems.push(...this.todoItems.splice(event.index, 1));
    }
    if (event.action === 'delete') {
      console.log(this.todoItems.splice(event.index, 1));
    }
  }
}

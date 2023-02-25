import {Component} from '@angular/core';
import {TodoService} from "../../shared/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  constructor(private todoService: TodoService) {
  }

  onClick(titleInput: HTMLInputElement) {
    this.todoService.addTodo(titleInput.value)
  }
}

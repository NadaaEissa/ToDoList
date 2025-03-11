import { Component } from '@angular/core';
import { Todo } from '../../../modules/todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-wrapper',
  imports: [CommonModule,FormsModule,TodoFormComponent,TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css'
})

  export class TodoWrapperComponent {
    todos: Todo[] = [];

    addTodo(todoText: string) {
      const newTodo: Todo = { id: Date.now(), text: todoText, completed: false };
      this.todos.push(newTodo);
    }

    deleteTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }

    toggleComplete(id: number) {
      this.todos = this.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    }
  }



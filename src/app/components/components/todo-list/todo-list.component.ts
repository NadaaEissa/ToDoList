import { Component, Input,Output,EventEmitter} from '@angular/core';
import { Todo } from '../../../modules/todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

  export class TodoListComponent {
    @Input() todos: Todo[] = [];
    @Output() deleteTask = new EventEmitter<number>();
    @Output() toggleTask = new EventEmitter<number>();
  }

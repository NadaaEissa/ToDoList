import { Component,Output ,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  taskText: string = '';

  @Output() addTask = new EventEmitter<string>();

  submitTask() {
    if (this.taskText.trim()) {
      this.addTask.emit(this.taskText);
      this.taskText = ''; // Clear input
    }
  }
}
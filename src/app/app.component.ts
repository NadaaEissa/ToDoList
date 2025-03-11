import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TodoWrapperComponent } from './components/components/todo-wrapper/todo-wrapper.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule,TodoWrapperComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab2-2';
  newTask = signal('');
  tasks = signal<{ id: number; title: string; completed: boolean }[]>([]);
  nextId = 1;


  updateNewTask(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.newTask.set(inputElement.value);
    }
  }

  addTask() {
    if (this.newTask().trim()) {
      this.tasks.update(tasks => [
        ...tasks,
        { id: this.nextId++, title: this.newTask(), completed: false },
      ]);
      this.newTask.set('');
    }
  }


  deleteTask(id: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }


  toggleTask(id: number) {
    this.tasks.update(tasks =>
      tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  }
}



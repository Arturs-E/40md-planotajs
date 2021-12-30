import { Injectable } from '@angular/core';
import { Task } from '../models/todo.model';
import { v4 as uuidv4 } from 'uuid';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class TodoServices {
  tasks: Task[] = [
    {
      id: uuidv4(),
      taskName: 'Complete homework',
      completed: false,
    }
  ]

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): Task[] {
    this.tasks.push(task);
    return this.tasks;
  }

  deleteTask(id: string): Task[] {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks;
  }

  changeTaskCompletedState(id: string): Task[] {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    return this.tasks;
  }

  updateTask(task: Task) {
    this.tasks = this.tasks.map((item) => {
      if (item.id === task.id) {
        return task;
      }
      return item;
    })
    return this.tasks;
  }
}

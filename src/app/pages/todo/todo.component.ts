import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

export type Task = {
  id: string;
  taskName: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [];
  showEditModalWindow = false;
  taskToEdit = {} as Task;
  filterCheckboxState = {
    onlyActive: false,
  }

  constructor() { }

  ngOnInit(): void {
  }

  addNewTask(formData: FormControl) {
    this.tasks.push({id: uuidv4(), taskName: formData.value.toLowerCase(), completed: false});
  }

  changeCompletedState(id: string) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  openEditModalWindow(task: Task) {
    this.taskToEdit = task;
    this.showEditModalWindow = true;
  }

  closeEditModalWindow() {
    this.showEditModalWindow = false;
  }

  updateEditedTask(task: Task) {
    this.tasks = this.tasks.map((item) => {
      if (item.id === task.id) {
        return task;
      }
      return item;
    })
  }

  setCheckboxState(value: boolean) {
    this.filterCheckboxState = {...this.filterCheckboxState, onlyActive: value}
  }

  showFilteredTasks() {
    if (this.filterCheckboxState.onlyActive) {
      return this.tasks.filter((task) => task.completed);
    }
    return this.tasks;
  }
}


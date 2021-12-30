import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../../shared/models/todo.model';
import { TodoServices } from '../../shared/services/todo.services';

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

  constructor(public todoServices: TodoServices) {
    this.tasks = this.todoServices.tasks;
  }

  ngOnInit(): void {
  }

  addNewTask(formData: FormControl) {
    this.tasks = this.todoServices
      .addTask({id: uuidv4(), taskName: formData.value.toLowerCase(), completed: false});
  }

  changeCompletedState(id: string) {
    this.tasks = this.todoServices.changeTaskCompletedState(id);
  }

  deleteTask(id: string) {
    this.tasks = this.todoServices.deleteTask(id);
  }

  openEditModalWindow(task: Task) {
    this.taskToEdit = task;
    this.showEditModalWindow = true;
  }

  closeEditModalWindow() {
    this.showEditModalWindow = false;
  }

  updateEditedTask(task: Task) {
    this.tasks = this.todoServices.updateTask(task);
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


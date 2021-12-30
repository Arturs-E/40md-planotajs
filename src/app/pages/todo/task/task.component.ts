import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../../shared/models/todo.model'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  @Output() toParentChangeCompletedState = new EventEmitter();
  @Output() toParentRemoveTask = new EventEmitter();
  @Output() toParentOpenEditModalWindow = new EventEmitter();

  faCheck = faCheck;
  faEdit = faEdit;
  faTrash = faTrash;

  showEditModalWindow = false;

  constructor() {
    this.task = {} as Task;
  }

  ngOnInit(): void {
  }

  setComplete() {
    this.toParentChangeCompletedState.emit(this.task.id);
  }

  removeTask() {
    this.toParentRemoveTask.emit(this.task.id);
  }

  openEditModalWindow() {
    this.toParentOpenEditModalWindow.emit(this.task);
  }

}

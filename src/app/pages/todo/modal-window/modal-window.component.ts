import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../todo.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  @ViewChild('editTaskInput') input!: ElementRef<HTMLInputElement>

  @Input() task!: Task;
  @Input() primaryButtonTitle!: string;
  @Output() toParentCloseModalWindow = new EventEmitter();
  @Output() toParentFormSubmission = new EventEmitter();

  editTaskValue = new FormControl('');

  faWindowClose = faWindowClose;

  constructor() { }

  ngOnInit(): void {
    this.editTaskValue.setValue(this.task.taskName);
  }

  ngAfterViewInit(): void {
    this.input.nativeElement.focus();
  }

  closeModalWindow() {
    this.toParentCloseModalWindow.emit();
  }

  saveEditedTask($event: SubmitEvent) {
    $event.preventDefault();
    this.toParentFormSubmission.emit({...this.task, taskName: this.editTaskValue.value });
    this.closeModalWindow();
  }
}


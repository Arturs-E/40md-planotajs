import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Task } from '../todo.component';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss']
})
export class AddNewTaskComponent implements OnInit {
  @ViewChild('newTaskId') input!: ElementRef<HTMLInputElement>;

  @Input() tasks!: Task[];
  @Output() formSubmission = new EventEmitter();

  buttonTitle = 'Add';
  buttonType = 'submit';
  newTaskValue = new FormControl('', [
    Validators.required,
  ]);

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.input.nativeElement.focus();
  }

  sendFormData($event: SubmitEvent) {
    $event.preventDefault();
    if (this.newTaskValue.valid
      && !this.tasks.some((task) => task.taskName === this.newTaskValue.value.toLowerCase())) {
      this.formSubmission.emit(this.newTaskValue);
      this.newTaskValue.setValue('');
    }
    this.input.nativeElement.focus();
  }
}


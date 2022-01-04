import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { TaskComponent } from './task/task.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let taskComponent: TaskComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let taskFixture: ComponentFixture<TaskComponent>;
  let sampleDataElement: HTMLSpanElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TodoComponent,
        TaskComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    taskFixture = TestBed.createComponent(TaskComponent);
    taskComponent = taskFixture.componentInstance;
    sampleDataElement = taskFixture.nativeElement.querySelector('.todo__task-item-task');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have heading of To-do list', () => {
    const heading: HTMLHeadingElement = taskFixture.nativeElement.querySelector('h2');
    expect(heading.textContent).toBe('To-do list');
  });

  it('should include sample task - Complete homework', () => {
    expect(sampleDataElement.textContent).toBe('Complete homework');
  });
});

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.scss']
})
export class FilterCheckboxComponent implements OnInit {
  @Input() title!: string;
  @Input() checkboxState!: boolean;
  @Output() toParentClickHandler = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setCheckboxState($event: Event) {
    this.toParentClickHandler.emit(($event.target as HTMLInputElement).checked)
  }
}


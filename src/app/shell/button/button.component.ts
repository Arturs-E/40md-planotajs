import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type?: string;
  @Input() classes?: string[];

  @Output() toParentClickHandler = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onClick() {
    this.toParentClickHandler.emit();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users?: User[];

  tableHeadTitles = ['ID', 'Vārds', 'Uzvārds', 'Valsts kods'];
}

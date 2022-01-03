import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../../shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServices } from '../../../shared/services/users.services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users?: User[];
  @Output() deleteUserEvent = new EventEmitter();

  faEdit = faEdit;
  faTrash = faTrash;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  tableHeadTitles = ['ID', 'Name', 'Surname', 'Coutry code', 'Options'];

  goToAddUserPage(): void {
    this.router.navigate(['add-user'], {relativeTo: this.route}).then();
  }

  goToEditUserPage(id: string): void {
    this.router.navigate([id], {relativeTo: this.route}).then();
  }

  deleteUser(id: string): void {
    this.deleteUserEvent.emit(id);
  }

}

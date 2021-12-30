import { Component, Input } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users?: User[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  tableHeadTitles = ['ID', 'Name', 'Surname', 'Coutry code'];

  goToAddUserPage(): void {
    this.router.navigate(['add-user'], {relativeTo: this.route})
  }
}

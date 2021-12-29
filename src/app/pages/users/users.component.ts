import { Component, OnInit } from '@angular/core';
import { AddUserQuery, User } from '../../shared/models/user.model';
import { UsersServices } from '../../shared/services/users.services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users?: User[];

  constructor(private usersService: UsersServices) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

  addUser(query: AddUserQuery): void {
    this.users = this.usersService.addUser(query);
  }

}

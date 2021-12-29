import { Injectable } from '@angular/core';
import { AddUserQuery, CountryCodeType, User } from '../models/user.model';
import { v4 as idGenerator } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class UsersServices {
  users: User[] = [
    {
      id: 'skyhfnbidhhmsaw',
      name: 'Jānis',
      surname: 'Bērzinš',
      country: CountryCodeType.LV
    }
  ]

  getUsers(): User[] {
    return this.users;
  }

  addUser(query: AddUserQuery){
    const newUser = {
      id: idGenerator(),
      ...query,
    }
    this.users.push(newUser);
    return this.users;
  }
}

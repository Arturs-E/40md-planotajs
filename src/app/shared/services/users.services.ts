import { Injectable } from '@angular/core';
import { AddUserQuery, CountryCodeType, User } from '../models/user.model';
import { v4 as idGenerator } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class UsersServices {
  users: User[] = [
    {
      id: idGenerator(),
      name: 'Jānis',
      surname: 'Bērzinš',
      country: CountryCodeType.LV
    },
    {
      id: idGenerator(),
      name: 'Urmas',
      surname: 'Sokk',
      country: CountryCodeType.EE
    },
    {
      id: idGenerator(),
      name: 'Jonas',
      surname: 'Varnas',
      country: CountryCodeType.LT
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

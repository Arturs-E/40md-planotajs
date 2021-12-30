import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddUserQuery } from '../../../shared/models/user.model';
import { UsersServices } from '../../../shared/services/users.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  @Output() addUserEvent = new EventEmitter<AddUserQuery>();

  showCountrySelect = false;
  addUserForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private usersService: UsersServices,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.addUserForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: [''],
      country: ['']
    })
  }

  addUser(event: SubmitEvent): void {
    event.preventDefault();
    this.usersService.addUser(this.addUserForm.value);
    this.router.navigate(['users']);
  }

  goToPreviousPage():void {
    this.router.navigate(['users']);
  }
}

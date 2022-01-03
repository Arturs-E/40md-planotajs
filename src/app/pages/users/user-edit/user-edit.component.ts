import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersServices } from '../../../shared/services/users.services';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit, OnDestroy {
  editUserForm: FormGroup = new FormGroup({});
  user?: User;
  userId!: string;
  routeSubscription?: Subscription;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersServices,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {(this.userId) = params['userId'];});
    this.user = this.usersService.getUser(this.userId);
    this.buildForm();
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
  }

  buildForm(): void {
    this.editUserForm = this.fb.group({
      name: [this.user?.name, [Validators.required]],
      surname: [this.user?.surname],
      country: [this.user?.country]
    })
  }

  saveChanges(event: SubmitEvent): void {
    event.preventDefault();
    this.usersService.editUser({ id: this.user?.id, ...this.editUserForm.value });
    this.router.navigate(['users']).then();
  }

  goToPreviousPage():void {
    this.router.navigate(['users']).then();
  }

}

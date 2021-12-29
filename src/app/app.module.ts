import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { UsersComponent } from './pages/users/users.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserAddComponent } from './pages/users/user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './pages/todo/todo.component';
import { AddNewTaskComponent } from './pages/todo/add-new-task/add-new-task.component';
import { FilterCheckboxComponent } from './pages/todo/filter-checkbox/filter-checkbox.component';
import { ModalWindowComponent } from './pages/todo/modal-window/modal-window.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskComponent } from './pages/todo/task/task.component';
import { ButtonComponent } from './shell/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HeaderComponent,
    AboutComponent,
    UsersComponent,
    UserListComponent,
    UserAddComponent,
    TodoComponent,
    AddNewTaskComponent,
    FilterCheckboxComponent,
    ModalWindowComponent,
    TaskComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

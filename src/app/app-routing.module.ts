import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { UsersComponent } from './pages/users/users.component';
import { TodoComponent } from './pages/todo/todo.component';
import { UserAddComponent } from './pages/users/user-add/user-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    // children: [
    //   {
    //     path: ':id',
    //   }
    // ]
  },
  {
    path: 'users/add-user',
    component: UserAddComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: '**',
    redirectTo: 'about',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

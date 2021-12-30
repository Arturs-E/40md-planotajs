import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu = [
    {
      path: 'users',
      title: 'Users'
    },
    {
      path: 'todo',
      title: 'To-do List'
    },
    {
      path: 'about',
      title: 'About'
    }
  ]

  ngOnInit(): void {
  }

}

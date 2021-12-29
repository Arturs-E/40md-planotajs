import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title = '40md-lekcija';

  about = {
    createdAt: '2011-10-05T14:48:00.000Z',
    description: 'An awesome page',
    rating: 3.5746852,
  };

  showDescription = false;

  toggleShowDescription():void {
    this.showDescription = !this.showDescription;
  }

}

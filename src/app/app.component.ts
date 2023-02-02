import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  settings = {
    counter: false,
    thumbnail: true,
    // plugins: [lgZoom]
  };
}

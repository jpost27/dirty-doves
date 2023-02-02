import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css', './app.component.css']
})
export class AppComponent {

  settings = {
    counter: false,
    thumbnail: true,
    // plugins: [lgZoom]
  };
}

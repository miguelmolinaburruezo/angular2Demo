import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2Demo';
  agreed = 0;
  disagreed = 0;
  voters = ['superman', 'spiderman', 'deadpool', 'luke cage', 'jessica jones', 'quake'];
  onVoted(event) {
    console.log('onvoted', event);
    if (event) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }
}

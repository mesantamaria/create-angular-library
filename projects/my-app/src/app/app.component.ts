import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <lib-my-lib [name]="title"></lib-my-lib>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}

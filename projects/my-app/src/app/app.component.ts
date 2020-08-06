import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <lib-button label="Aceptar"></lib-button>
    </div>
    <div>
      <lib-link href="https://www.npmjs.com/package/@mesantamaria/my-lib" label="NPM Package"></lib-link>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}

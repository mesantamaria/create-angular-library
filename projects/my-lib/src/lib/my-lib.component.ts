import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <input type="text" (keydown.enter)="markText($event.target.value)">
    <button>{{name}}</button>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {
  @Input() name;

  constructor() { }

  ngOnInit(): void {
  }

  markText(value: any) {
    console.log(value);
  }

}

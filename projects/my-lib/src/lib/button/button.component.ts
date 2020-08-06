import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input() label;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('Botón funciona');
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-link',
  templateUrl: './link.component.html'
})
export class LinkComponent implements OnInit {
  @Input() href;
  @Input() label;
  constructor() { }

  ngOnInit(): void {
  }

}

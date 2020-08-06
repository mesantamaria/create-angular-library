import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';



@NgModule({
  declarations: [MyLibComponent, ButtonComponent, LinkComponent],
  imports: [
  ],
  exports: [MyLibComponent, ButtonComponent, LinkComponent]
})
export class MyLibModule { }

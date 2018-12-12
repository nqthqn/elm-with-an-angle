import { Component } from '@angular/core';
import { Foo } from './elm/foo';
import { Main } from './elm/Main';

const f = new Foo();

@Component({
  selector: 'app-root',
  template: `<h1>angular wrapper</h1><div id="main">{{f.d}}</div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elm-with-an-angle';
}

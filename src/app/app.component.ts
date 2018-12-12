import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
const ElmMain = require('./elm/Main').Elm.Main as ElmModule;

@Component({
  selector: 'app-root',
  template: `<h1>angular wrapper</h1><div #elmTarget></div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'elm-with-an-angle';

  @ViewChild('elmTarget')
  elmTarget: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    ElmMain.init({
      node: this.elmTarget.nativeElement,
      flags: ''
    });
  }
}


interface ElmModule {
  init(params: {
    node: HTMLElement,
    flags: string
  });
}

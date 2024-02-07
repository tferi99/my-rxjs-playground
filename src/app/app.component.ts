import { Component, ElementRef, ViewChild } from '@angular/core';
import * as ace from "ace-builds";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("editor") private editor!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue("<h1>Ace Editor works great in Angular!</h1>");

    aceEditor.setTheme('ace/theme/clouds');
    aceEditor.session.setMode('ace/mode/typescript');

    aceEditor.on("change", () => {
      console.log(aceEditor.getValue());
    });

  }
}

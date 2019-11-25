import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-externe-component',
  templateUrl: './html-externe-component.component.html',
  styles: [
    `
      .resultat-div-brown {
        color: brown;
        font-size: 24px;
      }
    `
  ]
})
export class HtmlExterneComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-interne-component',
  templateUrl: './css-interne-component.component.html',
  styles: [
    `
      .resultat-div-violet {
        color: purple;
        font-size: 24px;
      }
    `
  ]
})
export class CssInterneComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trois-binding-propriete',
  templateUrl: './trois-binding-propriete.component.html',
  styleUrls: ['./trois-binding-propriete.component.css']
})
export class TroisBindingProprieteComponent implements OnInit {

  public disabled = false;
  public test = window;

  constructor() { }

  ngOnInit() {
    console.log(this.test.location);
    console.log("href : " + this.test.location.href);
    console.log("host : " + this.test.location.host);
    console.log("pathname : " + this.test.location.pathname);
    console.log("port" + this.test.location.port);
  }
}

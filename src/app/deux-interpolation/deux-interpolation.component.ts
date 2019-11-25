import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deux-interpolation',
  templateUrl: './deux-interpolation.component.html',
  styleUrls: ['./deux-interpolation.component.css']
})
export class DeuxInterpolationComponent implements OnInit {

  public nom = "Éléanore";
  public myInterpolation = `Bonjour, je m'appel ${this.nom} et je suis un ange qui te protège de là-haut !`;

  constructor() { }

  ngOnInit() { }

}

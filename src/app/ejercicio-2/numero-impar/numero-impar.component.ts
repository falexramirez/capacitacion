import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-numero-impar',
  templateUrl: './numero-impar.component.html',
  styleUrls: ['./numero-impar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NumeroImparComponent implements OnInit {

  @Input()
  numerosImpares:number[];

  constructor() { }

  ngOnInit() {
  }

}

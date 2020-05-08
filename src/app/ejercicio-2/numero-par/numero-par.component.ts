import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-numero-par',
  templateUrl: './numero-par.component.html',
  styleUrls: ['./numero-par.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NumeroParComponent implements OnInit {

  @Input()
  numerosPares:number[];

  constructor() { }

  ngOnInit() {
  }

}

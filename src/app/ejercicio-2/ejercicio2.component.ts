import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit {

  numero = 0;
  numerosImpares:number[] = [];
  numerosPares:number[] = [];
  
  constructor() { }

  ngOnInit() {
  }

  onGameStarted(numero:number) {
    this.numero = numero;
    this.buildArrays();
  }

  buildArrays() {
    this.numerosImpares = [];
    this.numerosPares = [];
    for (let index = 0; index <= this.numero; index++) {
      if((index%2)) { 
        // Impar
        this.numerosImpares.push(index);
      } else {
        // Par
        this.numerosPares.push(index);
      }
    }
  }

}

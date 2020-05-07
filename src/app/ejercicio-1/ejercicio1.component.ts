import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  intervalo:string = "1000"; 

  listaImagenes:any[]=[
    { img:'assets/angular.jpg', name: 'angular' },
    { img:'assets/c-plus.png', name: 'c++' },
    { img:'assets/hello-world.png', name: 'hello world' },
    { img:'assets/java.jpg', name: 'java' },
    { img:'assets/jsf.png', name: 'jsf' },
    { img:'assets/net.jpg', name: '.net' },
    { img:'assets/node-js.jpg', name: 'node js' },
    { img:'assets/php.jpg', name: 'php' },
    { img:'assets/spring.jpg', name: 'spring framework' }
  ];

  constructor() { }

  ngOnInit() {
  }

  onIntervalChanged(intervalo:string) {
    this.intervalo = intervalo;
  }

}

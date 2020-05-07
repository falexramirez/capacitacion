import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-carousel',
  templateUrl: './header-carousel.component.html',
  styleUrls: ['./header-carousel.component.css']
})
export class HeaderCarouselComponent implements OnInit {

  @Output() changeInterval = new EventEmitter<string>();

  intervalo:string = "1000";

  constructor() { }

  ngOnInit() {
  }

  /**
   * Evento que envia al carrusel el intervalo 
   * ingresado por el usuario
   */
  onChangeInterval() {
    this.changeInterval.emit(this.intervalo);
  }

}

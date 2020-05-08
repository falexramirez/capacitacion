import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameControlComponent implements OnInit {

  @Output() startGame = new EventEmitter<number>();

  interval:any;
  numero:number = 0;
  stopGame:boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

  onStartGame() {
    this.interval = setInterval(() => {
      console.log(this.numero);
      this.startGame.emit(this.numero);
      this.numero++;
    },1000)
  }

  onStopGame() {
    console.log('Deteniendo el evento');
    clearInterval(this.interval);
  }

  get runChangeDetection() {
    console.log('Algo cambió.!!');
    return true;
  }

}

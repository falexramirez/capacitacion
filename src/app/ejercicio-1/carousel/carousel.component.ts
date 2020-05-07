import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private _config:NgbCarouselConfig) {
    //_config.interval = 3000;
    //_config.pauseOnHover = false;
    //_config.showNavigationArrows = false;
  }
  
  @Input() 
  intervalo:string;

  @Input()
  listaImagenes:any[];
 
  ngOnInit() {
  }

}

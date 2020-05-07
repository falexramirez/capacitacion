import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { SlideComponent } from "../slide/slide.component"

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

  @ContentChildren(SlideComponent) slideList: QueryList<SlideComponent>;
  
  constructor() { }

  ngOnInit() {   
  }

  ngAfterContentInit(): void {
    console.log(this.slideList.length);    
  }

}
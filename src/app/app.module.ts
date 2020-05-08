import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Ejercicio 1
import { Ejercicio1Component } from './ejercicio-1/ejercicio1.component';
import { HeaderCarouselComponent } from './ejercicio-1/header/header-carousel.component';
import { CarouselComponent } from './ejercicio-1/carousel/carousel.component';
import { SlidesComponent } from './ejercicio-1/carousel/slides/slides.component';
import { SlideComponent } from './ejercicio-1/carousel/slide/slide.component';
import { Ejercicio2Component } from './ejercicio-2/ejercicio2.component';
import { GameControlComponent } from './ejercicio-2/game-control/game-control.component';
import { NumeroParComponent } from './ejercicio-2/numero-par/numero-par.component';
import { NumeroImparComponent } from './ejercicio-2/numero-impar/numero-impar.component';


@NgModule({
  declarations: [
    AppComponent,
    // Ejercicio 1
    Ejercicio1Component,
    HeaderCarouselComponent,
    CarouselComponent,
    SlideComponent,
    SlidesComponent,
    GameControlComponent,
    NumeroParComponent,
    NumeroImparComponent,
    Ejercicio2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule,   
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

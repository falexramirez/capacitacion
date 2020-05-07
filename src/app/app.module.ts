import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Ejercicio 1
import { Ejercicio1Component } from './ejercicio-1/ejercicio1.component';
import { HeaderCarouselComponent } from './ejercicio-1/header/header-carousel.component';
import { CarouselComponent } from './ejercicio-1/carousel/carousel.component';
import { SlideComponent } from './ejercicio-1/carousel/slide/slide.component';
import { SlidesComponent } from './ejercicio-1/carousel/slides/slides.component';

@NgModule({
  declarations: [
    AppComponent,
    // Ejercicio 1
    Ejercicio1Component,
    HeaderCarouselComponent,
    CarouselComponent,
    SlideComponent,
    SlidesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

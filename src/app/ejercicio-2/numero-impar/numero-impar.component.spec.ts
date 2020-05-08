import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroImparComponent } from './numero-impar.component';

describe('NumeroImparComponent', () => {
  let component: NumeroImparComponent;
  let fixture: ComponentFixture<NumeroImparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroImparComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroImparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroParComponent } from './numero-par.component';

describe('NumeroParComponent', () => {
  let component: NumeroParComponent;
  let fixture: ComponentFixture<NumeroParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottleComponent } from './bottle.component';

describe('BottleComponent', () => {
  let component: BottleComponent;
  let fixture: ComponentFixture<BottleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottleComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

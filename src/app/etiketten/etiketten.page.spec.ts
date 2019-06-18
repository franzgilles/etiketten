import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtikettenPage } from './etiketten.page';

describe('EtikettenPage', () => {
  let component: EtikettenPage;
  let fixture: ComponentFixture<EtikettenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtikettenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtikettenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesS4Component } from './services-s4.component';

describe('ServicesS4Component', () => {
  let component: ServicesS4Component;
  let fixture: ComponentFixture<ServicesS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesS4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

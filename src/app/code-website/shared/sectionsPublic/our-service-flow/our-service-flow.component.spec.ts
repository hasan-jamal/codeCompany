import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServiceFlowComponent } from './our-service-flow.component';

describe('OurServiceFlowComponent', () => {
  let component: OurServiceFlowComponent;
  let fixture: ComponentFixture<OurServiceFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurServiceFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServiceFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

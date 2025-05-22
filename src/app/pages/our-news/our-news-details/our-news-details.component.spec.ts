import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNewsDetailsComponent } from './our-news-details.component';

describe('OurNewsDetailsComponent', () => {
  let component: OurNewsDetailsComponent;
  let fixture: ComponentFixture<OurNewsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurNewsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurNewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

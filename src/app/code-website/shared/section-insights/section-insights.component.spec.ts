import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInsightsComponent } from './section-insights.component';

describe('SectionInsightsComponent', () => {
  let component: SectionInsightsComponent;
  let fixture: ComponentFixture<SectionInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

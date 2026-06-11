import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInsightComponent } from './update-insight.component';

describe('UpdateInsightComponent', () => {
  let component: UpdateInsightComponent;
  let fixture: ComponentFixture<UpdateInsightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateInsightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

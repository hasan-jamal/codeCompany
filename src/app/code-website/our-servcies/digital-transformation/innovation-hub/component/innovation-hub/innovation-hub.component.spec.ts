import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationHubComponent } from './innovation-hub.component';

describe('InnovationHubComponent', () => {
  let component: InnovationHubComponent;
  let fixture: ComponentFixture<InnovationHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnovationHubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnovationHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

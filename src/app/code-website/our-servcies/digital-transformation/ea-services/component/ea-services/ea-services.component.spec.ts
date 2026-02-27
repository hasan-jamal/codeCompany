import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaServicesComponent } from './ea-services.component';

describe('EaServicesComponent', () => {
  let component: EaServicesComponent;
  let fixture: ComponentFixture<EaServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EaServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

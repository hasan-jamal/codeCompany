import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItServiceManagementComponent } from './it-service-management.component';

describe('ItServiceManagementComponent', () => {
  let component: ItServiceManagementComponent;
  let fixture: ComponentFixture<ItServiceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItServiceManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItServiceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

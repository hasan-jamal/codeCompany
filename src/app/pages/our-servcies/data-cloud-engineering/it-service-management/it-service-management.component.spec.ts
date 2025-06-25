import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITServiceManagementComponent } from './it-service-management.component';

describe('ITServiceManagementComponent', () => {
  let component: ITServiceManagementComponent;
  let fixture: ComponentFixture<ITServiceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ITServiceManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ITServiceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

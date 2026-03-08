import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterRecoverySolutionsComponent } from './disaster-recovery-solutions.component';

describe('DisasterRecoverySolutionsComponent', () => {
  let component: DisasterRecoverySolutionsComponent;
  let fixture: ComponentFixture<DisasterRecoverySolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisasterRecoverySolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisasterRecoverySolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

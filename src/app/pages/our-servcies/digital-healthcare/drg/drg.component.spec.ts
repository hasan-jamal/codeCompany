import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DRGComponent } from './drg.component';

describe('DRGComponent', () => {
  let component: DRGComponent;
  let fixture: ComponentFixture<DRGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DRGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DRGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

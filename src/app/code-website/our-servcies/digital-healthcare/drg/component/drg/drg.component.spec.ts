import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrgComponent } from './drg.component';

describe('DrgComponent', () => {
  let component: DrgComponent;
  let fixture: ComponentFixture<DrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

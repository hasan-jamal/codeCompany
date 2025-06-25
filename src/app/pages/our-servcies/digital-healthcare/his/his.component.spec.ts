import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HISComponent } from './his.component';

describe('HISComponent', () => {
  let component: HISComponent;
  let fixture: ComponentFixture<HISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HISComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

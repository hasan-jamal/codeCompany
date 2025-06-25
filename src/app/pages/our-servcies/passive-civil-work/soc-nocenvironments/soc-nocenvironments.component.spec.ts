import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SOCNOCEnvironmentsComponent } from './soc-nocenvironments.component';

describe('SOCNOCEnvironmentsComponent', () => {
  let component: SOCNOCEnvironmentsComponent;
  let fixture: ComponentFixture<SOCNOCEnvironmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SOCNOCEnvironmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SOCNOCEnvironmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

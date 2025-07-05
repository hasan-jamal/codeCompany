import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocNocenvironmentsComponent } from './soc-nocenvironments.component';

describe('SocNocenvironmentsComponent', () => {
  let component: SocNocenvironmentsComponent;
  let fixture: ComponentFixture<SocNocenvironmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocNocenvironmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocNocenvironmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

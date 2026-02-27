import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdmoServicesComponent } from './ndmo-services.component';

describe('NdmoServicesComponent', () => {
  let component: NdmoServicesComponent;
  let fixture: ComponentFixture<NdmoServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NdmoServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdmoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

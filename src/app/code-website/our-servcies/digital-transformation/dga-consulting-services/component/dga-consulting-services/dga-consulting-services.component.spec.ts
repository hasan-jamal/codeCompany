import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgaConsultingServicesComponent } from './dga-consulting-services.component';

describe('DgaConsultingServicesComponent', () => {
  let component: DgaConsultingServicesComponent;
  let fixture: ComponentFixture<DgaConsultingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DgaConsultingServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgaConsultingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

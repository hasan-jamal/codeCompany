import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorWayfindingComponent } from './indoor-wayfinding.component';

describe('IndoorWayfindingComponent', () => {
  let component: IndoorWayfindingComponent;
  let fixture: ComponentFixture<IndoorWayfindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndoorWayfindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndoorWayfindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServciesComponent } from './servcies.component';

describe('ServciesComponent', () => {
  let component: ServciesComponent;
  let fixture: ComponentFixture<ServciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

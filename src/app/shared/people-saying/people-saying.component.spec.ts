import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSayingComponent } from './people-saying.component';

describe('PeopleSayingComponent', () => {
  let component: PeopleSayingComponent;
  let fixture: ComponentFixture<PeopleSayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleSayingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleSayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

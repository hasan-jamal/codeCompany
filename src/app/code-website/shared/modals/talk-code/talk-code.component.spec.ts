import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkCodeComponent } from './talk-code.component';

describe('TalkCodeComponent', () => {
  let component: TalkCodeComponent;
  let fixture: ComponentFixture<TalkCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalkCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

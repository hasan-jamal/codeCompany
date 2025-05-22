import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMbComponent } from './navbar-mb.component';

describe('NavbarMbComponent', () => {
  let component: NavbarMbComponent;
  let fixture: ComponentFixture<NavbarMbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarMbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

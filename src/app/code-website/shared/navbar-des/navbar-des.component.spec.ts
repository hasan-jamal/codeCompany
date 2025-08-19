import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDesComponent } from './navbar-des.component';

describe('NavbarDesComponent', () => {
  let component: NavbarDesComponent;
  let fixture: ComponentFixture<NavbarDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarDesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

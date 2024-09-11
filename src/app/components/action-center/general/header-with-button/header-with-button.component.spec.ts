import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithButtonComponent } from './header-with-button.component';

describe('HeaderWithButtonComponent', () => {
  let component: HeaderWithButtonComponent;
  let fixture: ComponentFixture<HeaderWithButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderWithButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

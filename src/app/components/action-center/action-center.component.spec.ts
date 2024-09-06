import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCenterComponent } from './action-center.component';

describe('ActionCenterComponent', () => {
  let component: ActionCenterComponent;
  let fixture: ComponentFixture<ActionCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDataBoxComponent } from './small-data-box.component';

describe('SmallDataBoxComponent', () => {
  let component: SmallDataBoxComponent;
  let fixture: ComponentFixture<SmallDataBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmallDataBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallDataBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

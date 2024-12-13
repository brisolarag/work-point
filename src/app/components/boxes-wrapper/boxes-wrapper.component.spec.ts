import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxesWrapperComponent } from './boxes-wrapper.component';

describe('BoxesWrapperComponent', () => {
  let component: BoxesWrapperComponent;
  let fixture: ComponentFixture<BoxesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxesWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

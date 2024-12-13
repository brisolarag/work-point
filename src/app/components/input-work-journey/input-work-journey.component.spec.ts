import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWorkJourneyComponent } from './input-work-journey.component';

describe('InputWorkJourneyComponent', () => {
  let component: InputWorkJourneyComponent;
  let fixture: ComponentFixture<InputWorkJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWorkJourneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputWorkJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

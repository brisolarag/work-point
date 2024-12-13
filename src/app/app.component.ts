import {Component, ViewChild} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { InputWorkJourneyComponent } from "./components/input-work-journey/input-work-journey.component";
import { BoxesWrapperComponent } from "./components/boxes-wrapper/boxes-wrapper.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, MatInputModule, MatFormFieldModule, FormsModule, InputWorkJourneyComponent, BoxesWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'point-calculator';
  @ViewChild(BoxesWrapperComponent) boxesWrapperComponent!: BoxesWrapperComponent;

  journeyValue:string | undefined;



  handleJourneyChange(newJourney: string) {
    this.journeyValue = newJourney;
    console.log('Journey value received in AppComponent:', this.journeyValue);
  }

  resetValues() {
    this.boxesWrapperComponent.clearValues();
  }


}

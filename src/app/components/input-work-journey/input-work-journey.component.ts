import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-work-journey',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-work-journey.component.html',
  styleUrl: './input-work-journey.component.scss'
})
export class InputWorkJourneyComponent {
  private readonly check:   string =    '✓';
  private readonly pencil:  string =    '✎';
  // as a intern:
  journey:string = '6:00'

  @Output() journeyChange = new EventEmitter<string>();
  
  editing: boolean = false;

  ngOnInit() {
    this.journeyChange.emit(this.journey);
  }

  toggleState(): void {
    this.editing = !this.editing;
    console.log(this.journey);
    if (!this.editing) {this.journeyChange.emit(this.journey)};
  }

  get label() {
    return this.editing ? this.check : this.pencil;
  }


}

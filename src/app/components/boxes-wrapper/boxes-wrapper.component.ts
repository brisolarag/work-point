import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'boxes-wrapper',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './boxes-wrapper.component.html',
  styleUrl: './boxes-wrapper.component.scss'
})
export class BoxesWrapperComponent {
  @Input() journey : string | undefined;
  
  in1:string|undefined ; out1:string|undefined;
  in2:string|undefined ; out2:string|undefined;

  get colorResult() {
    return this.areTheTimesFilled() ? "green" : "red";
  }

  updateFields() {
    if (this.areTheTimesFilled()) {
      this.out2 = this.getLastMarkTime()
    } else {
      this.out2 = '';
    }
  }


  private getLastMarkTime() {
    const in2 = this.parseTimeString(this.in2!);
      const out2Date = this.addSecondsToDate(in2, this.timeLeft());
      const hours = out2Date.getHours().toString().padStart(2, '0');
      const minutes = out2Date.getMinutes().toString().padStart(2, '0');
  
      return `${hours}:${minutes}`
  }

  private areTheTimesFilled = () => (this.in1 && this.in2 && this.out1) ? true : false;
  
  private timeLeft() {
    const increased = this.firstHalfInSeconds()! + this.transformJourneyToSeconds()!;
    return increased;
  }

  private firstHalfInSeconds = () => this.calculateTimeDifference(this.out1!, this.in1!);

  private calculateTimeDifference(startString: string, endString: string): number | undefined {
    const startTime = this.parseTimeString(startString);
    const endTime = this.parseTimeString(endString);

    if (startTime && endTime) {
      const differenceInMilliseconds = endTime.getTime() - startTime.getTime();
      return differenceInMilliseconds / 1000;
    }
    return undefined;
  }

  private parseTimeString(timeString: string): Date {
    const [hours, minutes] = timeString.split(':').map(Number);
    const now = new Date();
    now.setHours(hours, minutes, 0, 0);
    return now;
  }

  private transformJourneyToSeconds() {
    const journeyString = this.journey!;
    let [hours, minutes] = journeyString.split(":").map(Number);

    const hoursInSeconds = (hours * 60) * 60;
    const minutesInSeconds = minutes * 60;

    return hoursInSeconds + minutesInSeconds;
  }


  private addSecondsToDate(date: Date, seconds: number): Date {
    date.setTime(date.getTime() + seconds * 1000);
    return date;
  }


  clearValues() {
    this.in1 = this.in2 = this.out1 = this.out2 = undefined;
  }




}

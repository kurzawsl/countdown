import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  start: number;
  end: number;
  title: number;
  startDate: Date;
  endDate: Date;
  currentDate: Date;
  daysToGo: any;
  daysPassed: any;
  hoursToGo: any;
  hoursPassed: any;
  minutesToGo: any;
  minutesPassed: any;
  secondsToGo: any;
  secondsPassed: any;

  constructor() {
    this.start = 1486234800000;
    this.end = 1494007200000;
    this.startDate = new Date(this.start);
    this.endDate = new Date(this.end);
  }

  getDaysDiff(start:number,end:number){
    return Math.trunc((end - start)/1000/60/60/24);
  }

  getHoursDiff(start:number,end:number){
    return Math.trunc(((end - start)-this.getDaysDiff(start,end)*1000*60*60*24)/1000/60/60);
  }

  getMinutesDiff(start:number,end:number){
    return Math.trunc(((end - start)-this.getDaysDiff(start,end)*1000*60*60*24-this.getHoursDiff(start,end)*1000*60*60)/1000/60);
  }

  getSecondsDiff(start:number,end:number){
    return Math.trunc(((end - start)-this.getDaysDiff(start,end)*1000*60*60*24-this.getHoursDiff(start,end)*1000*60*60-this.getMinutesDiff(start,end)*60000)/1000);
  }

  ngOnInit() {
    let timer = Observable.timer(0, 1000);
    timer.subscribe(t => {
      this.currentDate = new Date();
      this.daysPassed = this.getDaysDiff(this.start, this.currentDate.getTime());
      if(this.daysPassed < 10){
        this.daysPassed = "0"+this.daysPassed;
      }
      this.daysToGo = this.getDaysDiff(this.currentDate.getTime(),this.end);
      if(this.daysToGo < 10){
        this.daysToGo = "0"+this.daysToGo;
      }
      this.hoursPassed = this.getHoursDiff(this.start, this.currentDate.getTime());
      if(this.hoursPassed < 10){
        this.hoursPassed = "0"+this.hoursPassed;
      }
      this.hoursToGo = this.getHoursDiff(this.currentDate.getTime(),this.end);
      if(this.hoursToGo < 10){
        this.hoursToGo = "0"+this.hoursToGo;
      }
      this.minutesPassed = this.getMinutesDiff(this.start, this.currentDate.getTime());
      if(this.minutesPassed < 10){
        this.minutesPassed = "0"+this.minutesPassed;
      }
      this.minutesToGo = this.getMinutesDiff(this.currentDate.getTime(),this.end);
      if(this.minutesToGo < 10){
        this.minutesToGo = "0"+this.minutesToGo;
      }
      this.secondsPassed = this.getSecondsDiff(this.start, this.currentDate.getTime());
      if(this.secondsPassed < 10){
        this.secondsPassed = "0"+this.secondsPassed;
      }
      this.secondsToGo = this.getSecondsDiff(this.currentDate.getTime(),this.end);
      if(this.secondsToGo < 10){
        this.secondsToGo = "0"+this.secondsToGo;
      }
    });
  }

}

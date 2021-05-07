import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClockService } from '../services/clock.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit{

  clockValue$ : Observable<number>;
  public clocks: Clock[] = [];
  constructor(private service: ClockService) {}

  ngOnInit(): void {
    this.clockValue$ = this.service.clock$;
  }

  public incrementCounter() {
    this.clocks.push(new Clock())
  }
}

export class Clock {

}

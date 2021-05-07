import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  clock$: Observable<number>;
  constructor() {

    this.clock$ = interval(1000)
  }
}

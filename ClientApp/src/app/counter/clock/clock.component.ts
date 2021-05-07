import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { take, tap } from 'rxjs/internal/operators';
import { ClockService } from 'src/app/services/clock.service';
import { Clock } from '../counter.component';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  @Input() clock: Clock;
  clockValue$: Observable<number>;
  constructor(private clockService: ClockService) {
  }

  ngOnInit() {

    this.clockValue$ = this.clockService.clock$;
  }

}

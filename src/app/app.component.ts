import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interval$!: Observable<string>;
  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  ngOnInit(): void {
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? `${value} est pair` : `${value} est impair`),
      tap(text => this.logger(text))
    );
    // setTimeout(() => interval$.subscribe(value => console.log(value)), 3000);
  }

  logger(text: string):void {
    console.log(`Log: ${text}`);
  }
  
}
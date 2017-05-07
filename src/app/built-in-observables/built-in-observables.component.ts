import { createSubscriber } from 'app/shared/utils';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-built-in-observables',
  templateUrl: './built-in-observables.component.html',
  styleUrls: ['./built-in-observables.component.css']
})
export class BuiltInObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.test_01();
    // this.test_02();
    // this.test_03();
    // this.test_04();
    // this.test_05();
    // this.test_06();
  }

  test_01() {
    Observable.interval(500)
      .take(5)
      .subscribe(createSubscriber('interval'));
  }

  test_02() {
    Observable.timer(5000, 1000)
      .subscribe(createSubscriber('timer'));
  }

  test_03() {
    Observable.of('Hello world')
      .subscribe(createSubscriber('of'));
  }

  test_04() {
    Observable.from([43, 10, 4, 'hello world'])
      .subscribe(createSubscriber('from'));
  }

  test_05() {
    Observable.from([1,2,3,4,5])
      .map(i => i * 5)
      .subscribe(createSubscriber('from'));
  }

  test_06() {
    Observable.throw(new Error('Hey error!'))
      .subscribe(createSubscriber('Error'));
  }

}

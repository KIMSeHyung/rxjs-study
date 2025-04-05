/**
 * 1초마다 카운트하는 스트림 (slow$)

사용자 이벤트를 EventEmitter로 만들기 (예: "click")

click 이벤트 발생 시, slow$의 최신 카운트 값을 함께 출력해보자
 */

import { fromEvent, interval, map, take, withLatestFrom } from "rxjs";
import { EventEmitter } from "events";

const emmiter = new EventEmitter();

const click$ = fromEvent(emmiter, 'click').pipe(
    map(() => "click")
);

const slow$ = interval(100).pipe(
    take(10)
);

click$.pipe(
    withLatestFrom(slow$),
).subscribe(([c, s]) => console.log(`${c} ${s}`));

setTimeout(() => emmiter.emit('click'), 100);
setTimeout(() => emmiter.emit('click'), 200);
setTimeout(() => emmiter.emit('click'), 400);
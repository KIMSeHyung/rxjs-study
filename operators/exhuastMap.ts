import { exhaustMap, fromEvent, interval, map, take } from "rxjs";
import { EventEmitter } from "stream";

const emiiter = new EventEmitter();

const click$ = fromEvent(emiiter, 'click');

let clickCount = 0;

click$.pipe(
    map(() => ++clickCount),
    exhaustMap((count) => 
        interval(500).pipe(
            take(3),
            map((val) => `click ${count}: ${val}`)
        )
    )
).subscribe((val) => console.log(val));

setTimeout(() => emiiter.emit('click'), 0);
setTimeout(() => emiiter.emit('click'), 200);
setTimeout(() => emiiter.emit('click'), 400);
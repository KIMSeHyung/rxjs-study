import { EventEmitter } from "events"
import { fromEvent, interval, map, switchMap, take } from "rxjs";

const emiiter = new EventEmitter();

const click$ = fromEvent(emiiter, 'click');

let clickCount = 0;

click$.pipe(
    map(() => clickCount++),
    switchMap((count) => 
        interval(1000).pipe(
            take(5),
            map((val) => `클릭 ${count}: 값: ${val}`)
        )
    )
).subscribe({
    next: (val) => console.log(val),
    complete: () => console.log("스트림 종료")
});

setTimeout(() => emiiter.emit('click'), 1000);
setTimeout(() => emiiter.emit('click'), 2000);
setTimeout(() => emiiter.emit('click'), 4000);

setTimeout(() => {
    console.log("test 종료");
}, 10000);

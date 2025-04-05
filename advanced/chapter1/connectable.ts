import { connectable, interval, map, take } from "rxjs";

const source$ = interval(1000).pipe(
    take(3),
    map((val) => `원본: ${val}`)
);

const shared$ = connectable(source$);

shared$.subscribe((val) => console.log(`A: ${val}`));

setTimeout(() => {
    shared$.subscribe((val) => console.log(`B: ${val}`));
}, 1500);

shared$.connect();



import { interval, share, take } from "rxjs";

const shared$ = interval(1000).pipe(
    take(4),
    share()
);

shared$.subscribe((val) => console.log(`A: ${val}`));

setTimeout(() => {
    shared$.subscribe((val) => console.log(`B: ${val}`));
}, 1500);
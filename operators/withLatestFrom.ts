import { interval, map, take, withLatestFrom } from "rxjs";

const slow$ = interval(1000).pipe(
    take(5)
);

const fast$ = interval(500).pipe(
    take(10)
);

fast$.pipe(
    withLatestFrom(slow$),
    map(([f, s]) => `fast: ${f} , slow: ${s}`)
).subscribe((val) => console.log(val));


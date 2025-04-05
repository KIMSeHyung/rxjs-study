import { combineLatest, interval, map, take } from "rxjs";

const fast$ = interval(500).pipe(
    take(5),
    map((x) => `fast: ${x}`)
);

const slow$ = interval(1000).pipe(
    take(5),
    map((x) => `slow ${x}`)
);

combineLatest([fast$, slow$]).subscribe(
    ([f, s]) => console.log(`combined -> ${f}, ${s}`)
);
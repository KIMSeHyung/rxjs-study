import { interval, of, take, zip } from "rxjs";

zip(of('A', 'B', 'C'), interval(1000).pipe(take(3))).subscribe(
    ([val1, val2]) => console.log(`zip: ${val1} - ${val2}`)
);
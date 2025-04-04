import { delay, map, of } from "rxjs";

of('Hello RxJS').pipe(
    delay(2000)
).subscribe((val) => console.log(val));

of(1, 2, 3).pipe(
    map((x) => x * 100),
    delay(1000)
).subscribe((val) => console.log(val));
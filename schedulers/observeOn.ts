import { asyncScheduler, observeOn, of } from "rxjs";

of(1, 2, 3, 4).pipe(
    observeOn(asyncScheduler)
).subscribe((val) => console.log(val));
console.log("비동기 실행2");
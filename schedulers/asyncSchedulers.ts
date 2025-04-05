import { asyncScheduler, observeOn, of } from "rxjs";

// 동기 실행
of(1, 2, 3, 4).subscribe((val) => console.log(val));
console.log("동기 끝");

// 비동기 실행 - deprecated
of(1, 2, 3, 4, asyncScheduler).subscribe((val) => console.log(val));
console.log("비동기 실행");
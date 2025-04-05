/**
 * of(1,2,3) 스트림을 만들고

observeOn(asyncScheduler) 로 비동기 스케줄러 적용

출력 순서가 "끝!" → 값들이 출력되도록 해보자!
 */

import { asyncScheduler, observeOn, of } from "rxjs";

of(1, 2, 3).pipe(
    observeOn(asyncScheduler)
).subscribe(console.log);

console.log("끝");
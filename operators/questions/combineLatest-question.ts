/**
 * 두 interval 스트림 만들기

하나는 300ms, 다른 하나는 1000ms

각각 A-${n}, B-${n} 문자열로 가공

combineLatest로 결합 후 "결합: A-x / B-y" 형태로 출력해보자
 */

import { combineLatest, interval, map, take } from "rxjs";

const fast$ = interval(300).pipe(
    take(10),
    map((val) => `A-${val}`)
);

const slow$ = interval(1000).pipe(
    take(3),
    map((val) => `B-${val}`)
);

combineLatest([fast$, slow$]).subscribe(
    ([f, s]) => console.log(`${f} / ${s}`)
);
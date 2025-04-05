/**
 * Cold Observable을 Hot처럼 공유하는 방법 익히기

여러 구독자가 중복 요청 없이 같은 데이터를 받게 만들기
 */

import { interval, shareReplay, take } from "rxjs";

/*
B는 0부터 다시 시작됨 ❌
*/
// const obs$ = interval(1000).pipe(take(3));
// obs$.subscribe(val => console.log('구독자 A:', val));
// setTimeout(() => {
//   obs$.subscribe(val => console.log('구독자 B:', val));
// }, 1500); 

const obs$ = interval(1000).pipe(
    take(3),
    shareReplay(1)
);

obs$.subscribe((val) => console.log(`구독자 A: ${val}`));

setTimeout(() => {
    obs$.subscribe((val) => console.log(`구독자 B: ${val}`));
}, 2500);
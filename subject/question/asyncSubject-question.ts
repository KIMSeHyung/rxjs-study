/**
 * AsyncSubject<number> 생성

next(10), next(20), next(30) 순서대로 호출

두 명의 구독자 (A, B)를 각각 다른 시점에 등록

마지막으로 next(40) 후 complete() 호출

출력은 다음과 같아야 함:
 */

import { AsyncSubject } from "rxjs";

const subject = new AsyncSubject<number>();

subject.next(10);

subject.subscribe((val) => console.log(`구독자A: ${val}`));

subject.next(20);
subject.next(30);

subject.subscribe((val) => console.log(`구독자B: ${val}`));

subject.next(40);

subject.complete();


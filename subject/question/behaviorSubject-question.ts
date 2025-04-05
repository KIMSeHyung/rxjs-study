/**
 * BehaviorSubject<number> 를 만들고 초기값은 100

구독자 A는 즉시 구독

구독자 B는 500ms 뒤에 구독

A는 next(101), next(102) 값을 모두 받고

B는 구독하자마자 최신값(102)부터 시작해서 이후 값도 같이 받아야 함

출력은 A: 값, B: 값 식으로 구분되게!
 */

import { BehaviorSubject } from "rxjs";

const subject = new BehaviorSubject<number>(100);

subject.subscribe((val) => console.log(`구독자A: ${val}`));

subject.next(101)
subject.next(102)

setTimeout(() => {
    subject.subscribe((val) => console.log(`구독자B: ${val}`));
    subject.next(103);
}, 500)

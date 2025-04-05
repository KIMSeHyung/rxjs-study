 /**
  * ReplaySubject<number> 를 생성하고 버퍼 사이즈는 3

next(1), next(2), next(3), next(4) 순서대로 방출

구독자 A는 처음부터 구독

구독자 B는 500ms 뒤에 구독

구독자 B는 최근 3개 값만 받게 하고,

이후에 next(5) 방출되면 두 구독자 모두 그것도 받게 해봐!

출력 형식은 "A: x", "B: x" 식으로 구분되게 만들면 좋아 👍
  */

import { ReplaySubject } from "rxjs";

const subject = new ReplaySubject<number>(3);

subject.subscribe((val) => console.log(`구독자A: ${val}`));

setTimeout(() => {
    subject.subscribe((val) => console.log(`구독자B: ${val}`));
    subject.next(5);
}, 500);


subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);



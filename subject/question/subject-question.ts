/**
 * Subject<number>를 만들고

구독자 A, 구독자 B를 각각 다른 시점에 구독하도록 설정

다음 값을 방출: 1, 2, 3

구독자 A는 처음부터 모든 값 받음

구독자 B는 2부터 구독 시작해서 이후 값만 받음

각각의 구독자 콘솔 출력이 구분되도록 해봐
 */

import { Subject } from "rxjs";

const subject = new Subject<number>();

subject.subscribe((val) => console.log(`구독1: ${val}`));

subject.next(1);

subject.subscribe((val) => console.log(`구독2: ${val}`));

subject.next(2);
subject.next(3);
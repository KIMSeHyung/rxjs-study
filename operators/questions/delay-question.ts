/**
 * of("RxJS", "는", "타입스크립트", "와", "함께") 를 스트림으로 만들고

각 값의 방출을 1초 지연시킨 후

각 값을 출력해봐

마지막에 "완료됨" 로그도 출력해줘
 */

import { delay, of } from "rxjs";

of("RxJS", "는", "타입스크립트", "와", "함께").pipe(
    delay(1000)
).subscribe({
    next: (val) => console.log(val),
    complete: () => console.log("완료됨")
});

// zip 을 써야 하는데 아직 안배움
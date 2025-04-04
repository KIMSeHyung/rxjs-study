/**
 * of(100, 200, 300, 400, 500) 을 스트림으로 만들고
 * 처음 2개 값만 받아 출력하고,
 * "스트림이 자동 종료됨" 이라는 메시지를 complete에서 출력해봐
 */

import { of, take } from "rxjs";

of(100, 200, 300, 400, 500).pipe(
    take(2)
).subscribe({
    next: (val) => console.log(val),
    error: console.error,
    complete: () => console.log("스트림이 자동 종료됨")
});
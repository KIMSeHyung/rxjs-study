/**
 * of('a', 'b', 'c') 스트림을 생성하고,

첫 번째 tap에서 각 문자를 출력하되 [Original] 메시지와 함께 출력,

map을 이용해서 각 문자를 대문자로 변환,

두 번째 tap에서 대문자로 변환된 값을 [Uppercase] 메시지와 함께 출력,

최종적으로 subscribe에서 값을 출력하고, 스트림이 종료되면 "스트림 완료됨" 메시지를 출력해.
 */

import { map, of, tap } from "rxjs";

of('a', 'b', 'c').pipe(
    tap((val) => console.log(`[Original] ${val}`)),
    map((x) => x.toUpperCase()),
    tap((val) => console.log(`[Uppercase] ${val}`))
).subscribe({
    next: (val) => console.log(val),
    complete: () => console.log("스트림 완료됨")
});
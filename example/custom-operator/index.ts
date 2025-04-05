/**
 * 나만의 RxJS 연산자 함수를 만들어 본다

기존 연산자들 (map, filter, ...) 처럼 .pipe() 안에서 쓸 수 있게 한다

재사용 가능한 스트림 로직으로 추상화한다
 */

import { from, fromEvent, interval, map, of, take } from "rxjs";
import { filterEven } from "./filterEven";
import { filterStartsWith } from "./practice";
import { logtap } from "./logtap";
import { distinctBy } from "./distinctBy";
import { debounceTyping } from "./debounceTyping";
import { withHistory } from "./withHistory";

interval(300).pipe(
    take(10),
    filterEven()
).subscribe((val) => console.log(`짝수: ${val}`));

from(["rx_test", "test", "rx_test2"]).pipe(
    filterStartsWith("rx")
).subscribe((val) => console.log(`startWith:rx : ${val}`));

of(1, 2, 3).pipe(
    logtap("debug")
).subscribe();

of(
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 1, name: 'A again' }
).pipe(
    distinctBy((item) => item.id.toString())
).subscribe(console.log)

fromEvent(process.stdin, "data").pipe(
    map((data) => {
        const message = data as string;
        return message.toString().trim()
    }),
    debounceTyping(1000)
).subscribe(console.log);

of(1, 2, 3, 4, 5).pipe(
    withHistory(3)
).subscribe(console.log);
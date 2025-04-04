/**
 * of(1, 2, 3, 4, 5) 를 이용해서
 * 짝수만 필터링하고, 각 값에 10을 곱해서 출력해봐!
 */
import { filter, map, of } from "rxjs";

of(1, 2, 3, 4, 5).pipe(
    filter((x) => !(x & 1)),
    map((x) => x * 10)
).subscribe((val) => console.log(val));
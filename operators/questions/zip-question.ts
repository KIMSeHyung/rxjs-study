/**
 * of("🍔", "🍕", "🌮") 와

interval(1000).pipe(take(3))
두 Observable을 zip으로 묶어서
다음과 같이 출력해보자:
 */

import { interval, of, take, zip } from "rxjs";

zip(of("🍔", "🍕", "🌮"), interval(1000).pipe(take(3))).subscribe(
    ([val1, val2]) => console.log(`음식 도착: ${val1} (${val2}초)`)
);
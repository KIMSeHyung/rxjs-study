/**
 * fromEvent(process.stdin, 'data') 를 사용해서 사용자 입력을 Observable로 변환

입력이 감지될 때마다 이전 타이머는 취소하고, 새로운 3초 타이머를 시작 (switchMap 사용!)

3초가 지나면 "입력 완료!" 를 출력

사용자가 입력을 여러 번 빠르게 해도, 마지막 입력 후 3초가 지나야만 메시지가 출력돼야 함
 */

import { fromEvent, map, switchMap, timer } from "rxjs";

fromEvent(process.stdin, 'data').pipe(
    switchMap((data) => 
        timer(3000).pipe(
            map(() => `입력 완료 ${data}`)
        )
    )
).subscribe((val) => console.log(val));
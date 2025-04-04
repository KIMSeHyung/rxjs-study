/**
 * 연습 1
 * of()를 사용해서 "Rx", "JS", "는", "재밌다" 를 순서대로 출력해봐.
 * 출력 끝나면 "끝!" 이라는 메시지도 출력해봐.
 * 
 * 연습 2
 * from()을 사용해서 [100, 200, 300] 배열을 Observable로 바꿔 출력해봐.
 */

import { from, Observer, of } from "rxjs";


// 연습 1
const ofObserver: Observer<string> = {
    next: (value) => console.log(value),
    error: (err) => console.log(err),
    complete: () => console.log("끝!")
}

of("Rx", "JS", "는", "재밌다").subscribe(ofObserver);


// 연습2
from([100, 200, 300]).subscribe((value) => console.log(value));
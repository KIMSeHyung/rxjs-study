import { from, interval, of, timer } from "rxjs";

// 고정된 값들을 순서대로 방출
of(1, 2, 3).subscribe({
    next: (value) => console.log(value),
    error: console.error,
    complete: () => console.log("complete!")
});



//배열, Promise 등 변환
from([10, 20, 30]).subscribe((value) => console.log(`from array: ${value}`));
from(Promise.resolve('RXJS')).subscribe((value) => console.log(`from promise: ${value}`));



//n ms 마다 숫자 방출
const sub = interval(1000).subscribe((value) => console.log(`from interval: ${value}`));

setTimeout(() => {
    sub.unsubscribe();
    console.log("interval unsubscribe!");
}, 3500);


// 나중에 시작 or 주기적으로 실행
const timer1 = timer(2000).subscribe(() => console.log("2초뒤 방출"));
const timer2 = timer(1000, 500).subscribe((value) => console.log(`1초뒤 0.5초마다 실행 ${value}`));

setTimeout(() => {
    timer1.unsubscribe();
    timer2.unsubscribe();
    console.log("timer unsubscribe!");
}, 4000);


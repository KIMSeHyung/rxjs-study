import { fromEvent } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.subscribe((event) => {
    console.log(`클릭 이벤트 발생! ${event.clientX} ${event.clientY}`)
});
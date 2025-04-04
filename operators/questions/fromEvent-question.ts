/**
 * fromEvent를 사용해 click 이벤트를 감지하고

event.clientX, clientY 좌표를 로그로 출력해봐
 */

import { fromEvent } from "rxjs";

fromEvent<MouseEvent>(document, 'click').subscribe(
    (e) => console.log(`${e.clientX} ${e.clientY}`)
);
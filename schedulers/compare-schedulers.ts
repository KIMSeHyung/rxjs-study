import {
    queueScheduler,
    asapScheduler,
    asyncScheduler
  } from 'rxjs';
  
  queueScheduler.schedule(() => console.log('queue')); // 1
  asapScheduler.schedule(() => console.log('asap')); // 3
  asyncScheduler.schedule(() => console.log('async')); // 4
  console.log('sync'); // 2

/* 출력 결과
    queue
    sync
    asap
    async
*/
  
import { catchError, debounceTime, distinctUntilChanged, fromEvent, map, switchMap, timer } from "rxjs";

const input$ = fromEvent(process.stdin, "data").pipe(
    map((buffer) => (buffer as string).toString().trim()),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((query) => {
        if(!query) {
            return [];
        }
        console.log(`검색어: ${query} 처리중..`);
        return timer(1000).pipe(
            map(() => `결과: ${query}에 대한 검색 완료`),
            catchError(() => ["에러 발생"])
        );
    })
)

input$.subscribe((result) => {
    if(result) console.log(result);
});

console.log("검색어를 입력하세요: ");
process.stdin.resume();
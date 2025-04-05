import { BehaviorSubject, catchError, combineLatestWith, debounceTime, distinctUntilChanged, finalize, fromEvent, map, of, switchMap, tap, timer } from "rxjs";

const loading$ = new BehaviorSubject<boolean>(false);
const cache = new Map<string, string>();
const lastQuery$ = new BehaviorSubject<string>("");

const input$ = fromEvent(process.stdin, "data").pipe(
    map((buf) => (buf as string).toString().trim()),
    debounceTime(500),
    distinctUntilChanged(),
    tap((query) => lastQuery$.next(query)),
    switchMap((query) => {
        if(!query) return of(null)

        if(cache.has(query)) {
            return of(`cache: ${cache.get(query)}`);
        }

        loading$.next(true);

        return timer(1000).pipe(
            map(() => {
                const result = `검색 결과: ${query}`;
                cache.set(query, result);
                return result;
            }),
            catchError(() => of("에러 발생!")),
            finalize(() => loading$.next(false))
        )
    })
);

input$.pipe(
    combineLatestWith(lastQuery$, loading$),
    tap(([result, query, isLoading]) => {
        console.clear();
        console.log(`검색어: ${query}`);

        if (isLoading) {
            console.log("검색중..")
        } else if (result) {
            console.log(result);
        } else {
            console.log("검색어를 입력하세요")
        }
    })
).subscribe();

console.log("검색어를 입력하세요: ");
process.stdin.resume();
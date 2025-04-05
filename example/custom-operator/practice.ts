/**
 * 연습: filterStartsWith(prefix: string) 만들기
문자열 Observable에서 주어진 prefix로 시작하는 값만 통과시키는 연산자를 만들어보자
 */

import { Observable } from "rxjs";

export function filterStartsWith(prefix: string): (source: Observable<string>) => Observable<string> {
    return (source) => new Observable<string>((subscriber) => {
        return source.subscribe({
            next: (val) => {
                if(val.startsWith(prefix)) {
                    subscriber.next(val);
                }
            },
            error: (err) => console.error(err),
            complete: () => subscriber.complete()
        });
    });
}
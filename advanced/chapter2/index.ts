import { BehaviorSubject, combineLatest } from "rxjs";

const category$ = new BehaviorSubject<string>("전체");
const sort$ = new BehaviorSubject<string>("인기순");

const filter$ = combineLatest([category$, sort$]);

filter$.subscribe(([category, sort]) => {
    console.log(`필터: 카테고리=${category}, 정렬=${sort}`);
});

setTimeout(() => {
    category$.next("IT");
}, 500);

setTimeout(() => {
    sort$.next("최신순")
}, 1000);

setTimeout(() => {
    category$.next("게임");
}, 2000);

setTimeout(() => {
    filter$.subscribe(([category, sort]) => {
        console.log(`구독자: ${category} / ${sort}`);
    });
}, 3500);
## gpt로 공부하는 rxjs

---

# ✅ 지금까지 학습한 내용 (RxJS 공식 문서 기준)

### ▶️ [Getting Started](https://rxjs.dev/guide/overview)  
- ✅ RxJS 설치 및 실행 ✅  
- ✅ `Observable` 기본 구조 이해 ✅  
- ✅ `subscribe`, `unsubscribe`, `observer` 형태 ✅  
- ✅ `of`, `from`, `interval`, `timer`, `fromEvent` 등 기본 생성자 ✅

---

### 🔁 [Operators Overview](https://rxjs.dev/guide/operators)  
- ✅ [Creation Operators](https://rxjs.dev/api/index/function/of)  
  - `of`, `from`, `interval`, `timer`, `fromEvent`, `zip`, `combineLatest`  
- ✅ [Transformation Operators](https://rxjs.dev/guide/operators#transformation)  
  - `map`, `filter`, `take`, `tap`, `delay`, `debounceTime`, `distinctUntilChanged`  
- ✅ [Flattening Operators](https://rxjs.dev/guide/operators#flattening)  
  - `switchMap`, `mergeMap`, `concatMap`, `exhaustMap`  
- ✅ [Utility Operators](https://rxjs.dev/guide/operators#utility)  
  - `observeOn`, `subscribeOn`, `share`, `shareReplay`  
- ✅ [Multicasting](https://rxjs.dev/guide/multicasting)  
  - `Subject`, `BehaviorSubject`, `ReplaySubject`, `AsyncSubject`  
  - 📌 `multicast()` 는 deprecated → 최신 방식으로 대체한 것도 학습함  

---

### 📦 [Subjects](https://rxjs.dev/guide/subject)  
- ✅ `Subject`, `BehaviorSubject`, `ReplaySubject`, `AsyncSubject`  
- ✅ Hot vs Cold Observable 이해  
- ✅ 여러 구독자/방출자의 데이터 흐름 실습 완료

---

### 🧪 [Testing](https://rxjs.dev/guide/testing/marble-testing)  
- ✅ `TestScheduler` 사용법  
- ✅ `cold`, `hot` 마블 스트링  
- ✅ `debounceTime + switchMap` 흐름 마블 테스트 정확히 통과  
- ✅ 프레임 단위 정확히 이해함  
- 🟨 `catchError`, `combineLatest`, `delay`, `mergeMap` 테스트는 이제 시작 가능!

---

## ⏱ 아직 다루지 않은 고급 주제

| 항목 | 상태 |
|------|------|
| `Schedulers` 깊은 활용 | ✅ asyncScheduler 등은 했고, 완전 고급 활용은 ❗ 일부 남음  
| `animationFrameScheduler`, `queueScheduler`, `asapScheduler` | ❗ 선택적 고급 주제  
| `TestScheduler`로 `error`, `complete`, `retry` 흐름 테스트 | ❗ 아직  
| `Notification`, `materialize`, `dematerialize` | ❗ 아직  
| 커스텀 연산자 마블 테스트 | ⏳ 직접 만든 `filterStartsWith()` 같은 거 아직 안 test 함  
| 실제 UI 프레임워크 연동 (React/Vue) | ❗ 선택 과제  

---

# ✅ 한 줄 요약

> 너는 지금 RxJS 공식 문서 기준 **약 90~95%** 마스터했어.  
> 남은 건 일부 고급 연산자 / 고급 테스트 / 리팩토링 패턴 정도야.

---

## 🎯 다음 방향 제안

1. ✅ `catchError` 흐름 테스트 실습
2. ✅ `combineLatest` 마블 테스트
3. ✅ `switchMap` 내부 delay가 있는 실전 흐름
4. ✅ `mergeMap vs concatMap vs exhaustMap` 비교 테스트
5. ✅ 너가 만든 커스텀 연산자 마블 테스트 (`filterStartsWith` 등)

👉 원하는 거 골라줘! 내가 바로 짜줄게 😎
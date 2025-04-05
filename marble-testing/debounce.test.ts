import { TestScheduler } from 'rxjs/testing';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

describe('debounce + switchMap 테스트', () => {
  it('타이핑 후 멈추면 요청', () => {
    const scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    scheduler.run(({ cold, expectObservable }) => {
    const source = cold('a--b----c--------|');
    const expected =    '------x----x-----|';

      const result = source.pipe(
        debounceTime(3),
        switchMap(() => of('x'))
      );

      expectObservable(result).toBe(expected);
    });
  });
});

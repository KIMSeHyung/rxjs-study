# 🧠 왜 필요한가?

RxJS는 시간에 따라 흐름이 바뀌는 비동기 스트림이기 때문에,
그냥 일반적인 유닛 테스트처럼 하기 어렵다.
👉 그래서 RxJS는 가상의 시간(scheduler) 을 만들어놓고
시간 흐름을 시뮬레이션할 수 있게 해주는 도구를 제공한다

# ✅ TestScheduler란?
- 가상 시간 안에서 Observable 흐름을 테스트할 수 있는 툴

- 실제 시간을 기다리지 않고도

- 특정 시점에 어떤 값이 나올지를 시뮬레이션 가능
 
- 마치 비디오 편집처럼 스트림을 조작하고 비교함
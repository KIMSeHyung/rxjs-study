/**
 * 전역 상태 관리 (전통적 Redux 역할 대체)

로그인 상태, 유저 정보, UI 상태 등 관리

리액트, Vue 등 프레임워크에서도 그대로 사용 가능
 */
import { getCurrentUser, setUserName, subscribeUser } from "./userStore";

subscribeUser("컴포넌트 A");

setTimeout(() => {
    setUserName('Alice');
}, 1000);


setTimeout(() => {
    setUserName('Bob');
}, 2000);


setTimeout(() => {
    console.log(`현재 사용자: ${getCurrentUser()}`);
}, 2500);

setTimeout(() => {
    subscribeUser("컴포넌트 B")
}, 3000);

setTimeout(() => {
    setUserName('Chris');
}, 4000);
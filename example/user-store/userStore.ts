/**
 * “사용자 상태 관리” 예제를 만들자.

사용자 이름을 저장하고,

변경 가능하며,

구독 중인 컴포넌트들은 자동으로 최신 이름을 받는다.
 */

import { BehaviorSubject } from "rxjs";

const userSubject = new BehaviorSubject<string>('Anonymous');

export const setUserName = (name: string) => {
    userSubject.next(name);
};

export const subscribeUser = (label: string) => {
    userSubject.subscribe((name) => {
        console.log(`[${label}] 사용자 이름: ${name}`);
    });
}

export const getCurrentUser = () => userSubject.value;
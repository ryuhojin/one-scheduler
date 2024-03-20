## 오늘내일모레

>일정관리 프로젝트, 맥의 달력과 같은 기본적인 일정관리 앱

---

##### 사용된 언어
- TypeScript

##### 사용된 스타일
- StyleX or TailwindCSS 둘중 하나 고려중

##### 사용된 프레임워크 및 라이브러리
1. electron + electron-forge(공식 권장 쓰는걸 선호함)
2. react
3. tanstack-router(파일라우팅 등 편해서)
4. jotai(작은 규모 플젝시에 편해서 + tanstack_query확장도 한몫함)
5. fullcalendar(가장 오래되고 확장성이 좋아서)

---

### 개발시 규칙 참고
- 최대한 공식가이드에 의거하여 소스코드 작성
- 컴포넌트 개발 시 합성컴포넌트 형식으로 작성 요망
- 컴포넌트 개발 방향은 아이템 -> 그룹 -> 섹션에 의거하여 개발
- 컴포넌트는 UI Driven만, 기능적요소는 컨테이너에 작성
- 재사용 가능한 코드는 hook으로 분리, 기능 hook과 ui 제어 hook으로 나누어관리

---

### 변경사항

##### 2024.03.18 초기 프로젝트 구성
- electron + electron_forge + vite + react setting

##### 2024.03.19 ipc통신 및 기타 통신 작업
- 외부 api와 통신할 것이기 때문에 http 통신 리시버와, ipc 통신을 위한 custom hook 작성
- tanstack-router적용(파일 기반 라우팅 예정) 

##### 2024.03.20 라우팅 Authenticated 간단 적용
- 라우팅시 분기를 통해 인증된 회원만 통과되게 적용
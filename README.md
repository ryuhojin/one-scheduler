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
### 변경사항

##### 2024.03.18 초기 프로젝트 구성
- electron + electron_forge + vite + react setting

##### 2024.03.18 ipc통신 및 기타 통신 작업
- 외부 api와 통신할 것이기 때문에 http 통신 리시버와, ipc 통신을 위한 custom hook 작성
- tanstack-router적용(파일 기반 라우팅 예정) 

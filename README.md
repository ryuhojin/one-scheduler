# one-line

일정 관리 및 실시간 공유 서비스 초기 개발 환경.

## 빠른 시작

```bash
cp .env.example .env
docker compose up --build
```

포트 충돌 시 `.env`에서 `POSTGRES_PORT`, `REDIS_PORT`, `API_PORT`, `WEB_PORT` 값을 변경한다.

접속 경로
- Admin Web: http://localhost:5173
- API Health: http://localhost:3000/health

## 구성
- `apps/api`: Fastify 기반 API
- `apps/admin-web`: React + Vite 관리자 웹
- `apps/electron-user`: 사용자 Electron 앱(추후 구현)
- `packages/shared`: 공통 타입

## 개발 명령

```bash
pnpm install
pnpm typecheck
pnpm --filter @one-line/api dev
pnpm --filter @one-line/admin-web dev
```

## DB 마이그레이션

DB 스키마/시드는 `apps/api/db/README.md` 기준으로 실행한다.

## 인증 API(초기)

- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/logout`
- `POST /auth/logout-all`
- `GET /auth/me`
- `POST /admin/sessions/revoke-user` (ADMIN/SUPER_ADMIN)

## 조직/사용자/그룹 API(초기)

- 부서
- `GET /admin/departments`
- `POST /admin/departments`
- `PATCH /admin/departments/:departmentId`
- `DELETE /admin/departments/:departmentId`
- `POST /admin/departments/:departmentId/assign-user`
- `POST /admin/departments/unassign-user`

- 사용자
- `GET /admin/users`
- `POST /admin/users/invite`
- `PATCH /admin/users/:userId`
- `DELETE /admin/users/:userId`

- 그룹
- `GET /groups`
- `POST /groups`
- `PATCH /groups/:groupId`
- `DELETE /groups/:groupId`
- `GET /groups/:groupId/members`
- `POST /groups/:groupId/invite`
- `POST /groups/:groupId/invitations/respond`
- `POST /groups/:groupId/members/:userId/remove`

## 일정 API(초기)

- `POST /schedules`
- `GET /schedules`
- `GET /schedules/:scheduleId`
- `PATCH /schedules/:scheduleId`
- `DELETE /schedules/:scheduleId`
- `POST /schedules/:scheduleId/share` (개인일정 공유 추가/수정)
- `DELETE /schedules/:scheduleId/share/:userId` (개인일정 공유 해제)

## 실시간 API(초기)

- WebSocket: `GET /realtime/ws?accessToken=<JWT_ACCESS_TOKEN>`
- 누락 동기화: `GET /realtime/sync?sinceAuditId=<cursor>&limit=<1..500>`
- 인증 실패 소켓 종료 코드: `4401 Unauthorized`

소켓 이벤트(`stream: "SCHEDULE"`)
- `SCHEDULE_CREATED`
- `SCHEDULE_UPDATED`
- `SCHEDULE_DELETED`
- `SCHEDULE_SHARED`

## 실시간 사용 예시

```bash
# 1) 로그인 후 access token 획득
curl -sS http://localhost:3000/auth/login \
  -H 'content-type: application/json' \
  -d '{"companyCode":"ONE-LINE","email":"admin@one-line.local","password":"OneLine!123"}'

# 2) 오프라인 누락 동기화
curl -sS "http://localhost:3000/realtime/sync?sinceAuditId=0&limit=200" \
  -H "authorization: Bearer <JWT_ACCESS_TOKEN>"
```

동기화 커서 규칙
- `sinceAuditId`는 `schedule_audit_log.id` 기준 문자열 숫자 커서다.
- 응답의 `nextCursor`를 다음 요청 `sinceAuditId`로 전달하면 된다.
- `hasMore=true`면 같은 방식으로 반복 조회한다.

시드 계정 로그인 예시
- 회사코드: `ONE-LINE`
- 이메일: `admin@one-line.local`
- 비밀번호: `OneLine!123`

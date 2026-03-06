# one-line

일정 관리 및 실시간 공유 서비스 초기 개발 환경.

## 빠른 시작

```bash
cp .env.example .env
docker compose up --build
```

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

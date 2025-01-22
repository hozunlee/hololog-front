# HOLOLOG : Tech blog by hojun

## 기술스택

App : svelteKit (SSR)

Css : tailwind + shadCN

DB : supabase

CMS : strapi

Deploy : koyeb(cms server) | vercel (app)


## 실행방법

자신의 DB와 strapi를 연결한 후 실행

```bash
npm i
npm run dev

```

update log
250123 01:00

- 메인화면 pagination 구현
- strapi api call : [pagination](https://docs.strapi.io/dev-docs/api/rest/sort-pagination)
- svelte-shadcn [pagination](https://www.shadcn-svelte.com/docs/components/pagination) 활용
- add lucide icon [Link](https://lucide.dev/guide/packages/lucide-svelte)

# MBTI Test README

### React 플러스 개인 과제 \_ LOL 정보 페이지

- 배포 링크 : https://lol-info-app-git-main-jinchaes-projects.vercel.app

<br />
<br />

## 🖥️ 프로젝트 소개

- LoL의 아이템, 챔피언, 챔피언 로테이션 등 다양한 데이터를 조회하는 페이지입니다.

<img src="/public/lol-info-main.png">

- **TypeScript**를 활용하여 타입 선언, useState에서 제네릭을 사용하였습니다.
- **Next.js**를 활용하여 동적 라우팅, App Router, 레이아웃 구성, Route Handler를 다루었습니다.
- **Riot Games의 API와 Data Dragon**를 활용하여 LoL의 다양한 정보를 나타냅니다.

<br />
<br />

## 🕰️ 개발 기간

2025 / 03 / 10 ~ 2025 / 03 / 19

<br />
<br />

## ⚙️ 개발 환경

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Riot Games](https://img.shields.io/badge/riotgames-D32936.svg?style=for-the-badge&logo=riotgames&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

<br />
<br />

## 📌 주요 기능

✔️ Next.js의 주요 렌더링 기법인 CSR, SSG, SSR, ISR을 활용하여 페이지를 구성했습니다.

✔️ Home : 전체 페이지의 정보를 확인하고 카드를 클릭하여 해당 페이지로 이동합니다.<br />
**SSG 렌더링 방식**으로, 빌드 시 정적으로 생성된 정보를 나타냅니다.

✔️ Champions : LoL에서 사용되는 모든 챔피언의 목록이 나타납니다. 카드를 클릭 시 해당 챔피언의 상세 페이지로 이동합니다. <br />
**ISR 렌더링 방식**으로 자주 변경되지 않는 정보를 나타냅니다.(재검증 시간 : 하루)

✔️ Champion Detail : 동적 라우팅을 사용하여 클릭한 챔피언의 상세 정보를 나타냅니다.<br />
**SSR 렌더링 방식**으로 항상 최신의 챔피언 상세 데이터를 불러옵니다.

✔️ Rotation : 현재 무료로 플레이 가능한 챔피언들을 표시합니다.<br />
**CSR 렌더링 방식**으로 클라이언트 사이드에서 데이터를 렌더링하여 나타냅니다.

✔️ Route Handlers 활용하여 클라이언트 사이드에서 실시간으로 데이터를 처리합니다.

✔️ Server Actions 활용하여 서버 컴포넌트 내에서 직접 API 데이터를 페칭하고 처리합니다.
<br />

<br />
<br />

## 🚨 트러블슈팅

- 서버 액션, 객체 데이터 배열 변환, Image 태그 설정 : https://coco910.tistory.com/106
- 인덱스 시그니처 VS Record<key, value> / 정규표현식 : https://coco910.tistory.com/107
- Next의 Tanstack Query : https://coco910.tistory.com/108

<br />
<br />

## 📁 MBTI Test 폴더 구조

```
📦src
 ┣ 📂_components
 ┃ ┗ Card.tsx
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ route.ts
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┗ page.tsx
 ┃ ┣ 📂constants
 ┃ ┃ ┣ baseUrl.ts
 ┃ ┃ ┣ queryKey.ts
 ┃ ┃ ┗ riotDataURL.ts
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ GeistMonoVF.woff
 ┃ ┃ ┗ GeistVF.woff
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ quries.tsx
 ┃ ┣ 📂items
 ┃ ┃ ┗ page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┗ page.tsx
 ┃ ┣ favicon.ico
 ┃ ┣ layout.tsx
 ┃ ┣ page.tsx
 ┃ ┗ provider.tsx
 ┣ 📂styles
 ┃ ┗ global.css
 ┣ 📂types
 ┃ ┣ Champion.ts
 ┃ ┣ ChampionRotation.ts
 ┃ ┗ Item.ts
 ┗ 📂utils
 ┃ ┣ riotApi.ts
 ┃ ┗ serverApi.ts
```

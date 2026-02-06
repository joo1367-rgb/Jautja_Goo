# GitHub Pages 배포 가이드

## 1. GitHub 저장소 만들기

1. https://github.com/new 에서 새 저장소 생성
2. 저장소 이름 입력 (예: `Jautja_Goo` 또는 `my-website`)

## 2. Git Remote 설정

```bash
# 기존 remote 제거 후 실제 저장소 연결
git remote remove origin
git remote add origin https://github.com/본인아이디/저장소이름.git
```

## 3. vite.config.ts base 경로 수정

저장소 이름에 맞게 `vite.config.ts`의 base를 수정하세요:

- 저장소 이름이 `Jautja_Goo`인 경우: `base: '/Jautja_Goo/'`
- 저장소 이름이 `my-website`인 경우: `base: '/my-website/'`
- 메인 사이트(username.github.io)인 경우: `base: '/'`

## 4. 배포 실행

```bash
npm run deploy
```

## 5. GitHub Pages 활성화

1. GitHub 저장소 → Settings → Pages
2. Source: **Deploy from a branch** 선택
3. Branch: **gh-pages** / **/(root)** 선택
4. Save

배포 후 사이트 URL: `https://본인아이디.github.io/저장소이름/`

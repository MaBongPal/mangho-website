# 망호 웹사이트

## 소개
[예시 폴더 구조](https://github.com/mertthesamael/lalasia)

## 사용 기술
- Next.js 15.1.6
- TypeScript ^5
- React ^19
- React DOM ^19
- Node.js ^20
- Tailwind CSS ^3.4.1
- ESLint ^9
- PostCSS ^8


## 프로젝트 실행
```bash
git clone https://github.com/MaBongPal/mangho-website/tree/dev
cd mangho-website

npm install # 최초 1회 실행
npm run dev # 개발 모드 실행
```
http://localhost:3000 # 실행 확인


## 프로젝트 관리
```bash
# 최신 dev 브랜치 가져오기
git checkout dev
git pull origin dev

# feature 브랜치 생성 후 이동
git checkout -b feature/이름

# 코드 수정 후 커밋
git add .
git commit -m "커밋 메시지"

# 원격 저장소로 업로드
git push origin feature/이름

# GitHub에서 PR(Pull Request) 생성 및 코드 리뷰

# 병합 완료 후 브랜치 정리
git checkout dev
git pull origin dev

# branch는 굳이 삭제할 필요 없음
# git branch -d feature/이름  # 로컬 feature 브랜치 삭제
# git push origin --delete feature/이름  # 원격 feature 브랜치 삭제
```

## 커밋 규칙

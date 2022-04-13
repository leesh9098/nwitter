# 이성훈

[04월 13일]
### firebase와 Github 연동  
1. 유저 아이콘 클릭
2. Settings 클릭
3. 왼쪽 최하단에 Developer settings 클릭
4. 왼쪽 두 번째 항목 OAuth Apps 클릭
5. new OAuth App 클릭 후 Application name 설정
6. firebase에 접속 후 로그인
7. Authetication 클릭
8. 두 번째 항목 sign-in-method 클릭
9. 새 제공업체 추가
10. GitHub 클릭
11. 사용 설정 활성화
12. 제공된 url을 GitHub callback url에 붙여넣기
13. Homepage Url은 firebase에서 두 번째에 있는 링크를 복사 후 붙여넣기
14. Register application 클릭
15. 생성된 클라이언트 ID와 보안 비밀번호를 복사 후 붙여넣기
16. 저장 버튼 클릭

---

[04월 06일]
### 절대경로 사용하기
root 위치에 jsconfig.json파일을 생성 후
```json
{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": ["src"]
}
```
위 코드를 붙여넣기  
※주의  
-> 컴포넌트 파일명이 모듈이름과 겹칠 수 있으니 주의할 것

---

[03월 30일]

### firebase 생성
1. https://firebase.google.com에 접속
2. 프로젝트 생성
3. 웹 선택
4. npm 또는 yarn으로 firebase 설치
5. React 프로젝트 내 src에 firebase.js 생성 후 firebase에서 복사한 코드를 붙여넣기
6. index.js에서 firebase를 import (8버전 이하, 9버전 이상의 import 방법이 다르므로 주의)  
```javascript
// 8버전 이하
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// 9버전 이상
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
```

### .env로 코드 숨기기
1. React 프로젝트 내 Root 디렉토리에서 .env 파일을 생성
2. REACT_APP_변수이름=값 포맷으로 지정
3. 사용할 React 프로젝트 내 파일에서 process.env.변수이름 으로 환경 변수를 호출하여 사용

### 

---

[03월 23일]

### 로컬PC에서 push
$ git config --global user.name "Your name"  
$ git config --global user.email you@example.com  

### 확인방법
git config user.name  
git config user.email  
# 이성훈

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
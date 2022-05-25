# 이성훈

[05월 25일]
### <input type="file" />로 파일 업로드하기 

---

[05월 18일]
### nweet 실시간으로 가져오기
기존 방식의
```javascript
dbService.collection("nweets").get()
```
은 브라우저를 새로고침해야 데이터를 가져옴  
실시간으로 가져오려면
```javascript
dbService.collection("nweets").onSnapShot()
```
을 사용할 것  
### nweet 삭제하기
생성한 nweet을 firestore에서 삭제하려면
```javascript
dbService.document.delete();
```

---

[05월 11일]
### firestore 사용하기
- fbase.js에서 firestore를 import 시켜주는데, firebase 버전에 따라 import 방법이
다르기 때문에 버전을 잘 확인하여 사용할 것  
```javascript
// 8버전 이하
import "firebase/firestore"

// 9버전 이상
import "firebase/compat/firestore"
```
- db 데이터를 가져오려면
```javascript
dbService.collection("컬렉션 이름").get();
```
- db 데이터를 추가하려면
```javascript
dbService.collection("컬렉션 이름").add({
    data1: data1,
    data2: data2
});
```

---

[05월 04일]
### react-router-dom v6에서 useHistory
useHistory가 사라지고 useNavigate로 대체되었음.  
예시
```javascript
// v5
const history = useHistory();
history.push("/");

// v6
const navigate = useNavigate();
navigate("/");
```

### react-router-dom v6에서 Redirect
Redirect가 사라지고 <Navigate>로 대체되었음.  
```javascript
// v5
<Redirect from="*" to="/" />

// v6
<Route path="*" element={<Navigate replace to="/" />} />
```

---

[04월 27일]
### Firebase DB 다루기
```javascript
// 이메일 주소와 비밀번호로 Firebase에 사용자 DB저장
authService.createUserWithEmailAndPassword(email, password);

// Firebase DB에 저장된 계정으로 로그인
authService.signInWithEmailAndPassword(email, password);
```

### 이메일이 중복일 때 에러 메시지 출력
에러 데이터가 json 형태로 리턴되기 때문에 아래와 같이 사용하면 이메일 중복 에러 메시지를 가져올 수 있음
```javascript
try {
    // 실행할 코드
} catch(error) {
    console.log(error.message);
}
```

---

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
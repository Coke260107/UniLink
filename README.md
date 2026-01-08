# UniLink

## Git Commit Guide

### 1. 커밋 메시지 규칙

#### 기본 형식

``` text
[type] message
```

- **`type`**: 변경 성격 (필수)
- **`message`**: 한 줄 요약(명령문, 현재형)

#### type 목록
|type|설명|
|---|---|
|feat|새로운 기능|
|fix|버그 수정|
| refactor | 리팩토링 (기능 변경 없음) |
| docs | 문서 변경 |
| test | 테스트 추가/수정 |
| perf | 성능 개선 |
| chore | 기타 작업 |
| setting | 설정 변경 |
| revert | 커밋 되돌리기 |

#### 작성 예시
``` text
[feat] Add JWT refresh token 
[fix] 유저 아이디 Null 오류 개선 // message 부분 한글 작성 가능
[refactor] validation logic 간단화
```

---

### 2. 커밋 단위 규칙

#### 원칙
- **한 커밋 = 하나의 목적**
- 되돌릴 수 있는 최소 단위로 커밋
- 서로 다른 변경은 분리

#### 분리 기준

아래에 해당하면 커밋을 나눈다.
- 기능 추가와 리팩토링 섞인 경우
- 로직 변경과 포맷 수정이 섞인 경우
- 서로 무관한 변경이 함께 있는 경우

---

### 3. 참고
- `main` 브랜치 직접 커밋 금지 (필요시 의논하여 결정)
- 기능 개발은 `dev` 브랜치에 개발 후 `PR`를 통해 `main`에 병합
- `push --force` 절대 사용 금지!

---

## Development Environment Version Guide

### 1. Frontend

| 항목 | 버전 |
| --- | --- |
| Node | 20.9 이상 |

#### 버전 확인 방법
윈도우 `cmd` 실행 후 다음 명령어 입력
``` powershell
node --version
```

### 2. Backend








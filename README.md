# I Learn

Deploy URL

http://i-learn.site

Development URL

http://i-learn.s3-website.ap-northeast-2.amazonaws.com/

# Untitled

[회원가입](Untitled%205d90d0534e974efaa358df11dcd5b361/%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%202bc7253cc6654d28bfbe7333cdc7e3f8.md)

[로그인 (1)](Untitled%205d90d0534e974efaa358df11dcd5b361/%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB%20(1)%20bea1b146524041588ebaace4bf6aa91d.md)

[메인페이지 (1)](Untitled%205d90d0534e974efaa358df11dcd5b361/%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5%20(1)%2046d0840f957841c2b4a601f606144348.md)

[가이드북 (1)](Untitled%205d90d0534e974efaa358df11dcd5b361/%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%E1%84%87%E1%85%AE%E1%86%A8%20(1)%202d32dee8fcd5484e99de81499d038430.md)

[문제 페이지 (1)](Untitled%205d90d0534e974efaa358df11dcd5b361/%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5%20(1)%204dcbede1f0494636a46939924225351f.md)

[결과 페이지 (1)](Untitled%205d90d0534e974efaa358df11dcd5b361/%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%20%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5%20(1)%2041ae65a1f73a402689dda96855d9dd32.md)

[단어장 페이지 (1)](Untitled%205d90d0534e974efaa358df11dcd5b361/%E1%84%83%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%A5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5%20(1)%207623a5ae57994b05a2dc3b6ab0e10841.md)

[마이페이지 (1)](Untitled%205d90d0534e974efaa358df11dcd5b361/%E1%84%86%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5%20(1)%20f1d1a953695140718d2d02dbcb6a0de1.md)
## Untitled

| 카테고리 | 카테고리 설명 | 요구사항ID | 요구사항명 | 우선순위 | 구분 | 요구사항 설명 | 요구사항 상세설명 | 입력 데이터 |
| --- | --- | --- | --- | --- | --- | ----- | ----- | ----- |
| Member | 유저 정보 관리 | MEMBER_01 | 회원가입 | LEVEL 0 | 기능 | 사용자 정보를 입력하여 유저 정보를 등록할 수 있다. | - 유저가 입력한 아이디,비밀번호,닉네임, 이메일을 등록한다.- 비밀번호는 두 번 입력해서 확인한다.- 등록시 유효성 검사는 클라이언트, 서버에서 한다. | - 아이디 : 5~20자 영소문자,숫자 (필수입력, 중복불가,특수문자 불가)- 비밀번호 : 8~20자 영문,숫자,특수문자 조합(필수입력)(가능한 특수문자 : ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ ＼ ] ^ _ ` { | } ~ \ )- 닉네임 : 5~20자 (필수입력, 중복불가)(가능한 특수문자 : ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ ＼ ] ^ _ ` { | } ~ \ )- 이메일 : 이메일 유효성 검사 |
|  |  | MEMBER_02 | 로그인 | LEVEL 0 | 기능 | 회원가입 시 제출된 회원 정보를 입력하여 권한을 얻을 수 있다. | - JWT 토큰 인증 구현- 로그인 유지 체크 여부 로컬스토리지 저장 | - 아이디 : 5~20자 영소문자,숫자- 비밀번호 : 8~20자 영문,숫자,특수문자 |
|  |  | MEMBER_03 | OAuth 로그인 | LEVEL 1 | 기능 | OAuth2 인증 구현 | - 구글, 카카오 OAuth 적용 |  |
|  |  | MEMBER_04 | 유저 정보 조회, 삭제 | LEVEL 0 | 기능 | 유저의 정보를 조회, 삭제 할 수 있다. | - 로그인한 유저가 자신의 정보를 조회할 수 있다.- 로그인한 유저가 탈퇴를 할 수 있다.- 탈퇴 시 본인 아이디를 입력한다. | - 입력한 아이디가 로그인한 아이디와 일치하면 회원 탈퇴 처리한다. |
|  |  | MEMBER_05 | 유저 정보 수정 | LEVEL 1 | 기능 | 유저의 정보를 수정 할 수 있다. | - 로그인한 유저가 닉네임, 비빌번호를 수정 할 수 있다- 변경할 닉네임을 입력한다.- 비밀번호는 한 번 입력해서 확인한다.- 수정시 유효성 검사는 클라이언트, 서버에서 한다. | - 닉네임 : 5~20자 (필수입력, 중복불가)(가능한 특수문자 : ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ ＼ ] ^ _ ` { | } ~ \ )- 비밀번호 : 8~20자 영문,숫자,특수문자 (필수입력)(가능한 특수문자 : ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ ＼ ] ^ _ ` { | } ~ \ ) |
|  |  | MEMBER_06 | 아이디/비밀번호 찾기 | LEVEL 1 | 기능 | 유저의 아이디/비밀번호를 찾을 수 있다. | - 아이디 찾기 시 유저 정보에 저장된 이메일 주소로 아이디 전체 또는 마스킹 처리된 일부 아이디를 발송한다.- 비밀번호 찾기 시 유저 정보에 저장된 이메일 주소로 인증코드를 발송해서 인증한 뒤 새 비밀번호를 변경한다.* 인증방법은 추후 결정 |  |
|  |  | MEMBER_07 | 비회원 | LEVEL 0 | 기능 | 비회원인 사용자도 서비스를 이용할 수 있다. | - 비회원은 챕터 별 학습만 가능하며 나머지는 회원가입을 유도한다. |  |
| Learning | 챕터 별 학습 | LEARN_01 | 가이드북 | LEVEL 2 | 기능 | 유저가 챕터별 가이드북을 조회한다. | - 각 챕터별 학습할 단어 10개의 뜻, 예문 표시됨- 단어,예문 소리 재생 기능1. 인사하기2. 쇼핑 및 주문하기3. 여행 중 도움 요청하기4. 질문하고 대답하기5. 날씨 묘사하기6. 현재진행형 사용하기7. 요리에 대해 말하기8. 대명사 사용하기9. 이웃과 대화하기10. 과거형 사용하기 |  |
|  |  | LEARN_02 | 문제 관리 | LEVEL 0 | 개요 | 유저가 챕터별 학습내용의 문제를 풀 수 있다. | - 가이드북에서 학습한 10개의 단어 관련 문제- 단어 1개당 4개 유형에서 각각 1문제씩 출제- 챕터당 총 40문제- 1~30번까지는 단어 맞추기- 31~40번까지는 주어진 예문에 따라 정답 고르기- 위 1~30, 31~40 두 그룹에 대해서는 그룹내 셔플 출제- 문제 하나 풀고 정답을 보고 다음 문제로 넘어 간다- 정답을 맞출 시 포인트를 획득한다. |  |
|  |  | LEARN_03 | 문제 유형 1 | LEVEL 0 | 기능 | 뜻 보고 영단어 고르는 객관식 문제 | - “안녕”이 나오면 객관식 문항 3개(”hi”,bye”,”wow”)중 1개 선택- 보기 클릭 시 단어 소리 재생 | 유저 포인트 추가(1점) |
|  |  | LEARN_04 | 문제 유형 2 | LEVEL 0 | 기능 | 영단어 보고 뜻 고르는 객관식 문제 | - “hi”가 나오면 객관식 문항 3개(”안녕”,”잘가”,”고마워”)중 1개 선택- 문제 클릭 시 단어 소리 재생 | 유저 포인트 추가(1점) |
|  |  | LEARN_05 | 문제 유형 3 | LEVEL 0 | 기능 | 소리 듣고 문제 맞추기 주관식 문제 | - 재생되는 소리에 알맞은 단어를 타이핑한다.- 정답 제출 후 문항 별 발음기호 제공 | 유저 포인트 추가(2점) |
|  |  | LEARN_06 | 문제 유형 4 | LEVEL 0 | 기능 | 예문에 빈칸을 주고 문맥 상 알맞은 단어 고르기 문제 | - 예문의 빈칸과 한글 해석을 제공하고 문항 3개(”hi”,bye”,”wow”)중 1개 선택 | 유저 포인트 추가(3점) |
|  |  | LEARN_07 | 결과 페이지 | LEVEL 0 | 기능 | 학습 결과,  학습 단어 종합 설명 페이지 | - 문제 풀이 정답률 표시- 총 획득한 포인트 표시- 학습한 단어 10개 설명 표시 |  |
| Manage | 학습 기록 관리 | MANAGE_01 | 학습 기록 조회 | LEVEL 0 | 기능 | 학습 진행 상황 | - 사용자가 특정 강의나 레슨의 학습 상황을 조회할 수 있다- 사용자의 학습진도 상태를 표시하는 기능- 00챕터의 00문제 학습중…- 최근에 학습했던 부분부터 이어서 학습할 수 있는 기능- “~챕터”의 “~문제” 부터 학습 시작 |  |
|  |  | MANAGE_02 | 일일학습 기록 조회 | LEVEL 1 | 기능 | 일별 학습 기록 표시 | - 사용자의 학습 기록을 관리하고 보여주는 기능 |  |
|  |  | MANAGE_03 | 단어장 추가 | LEVEL 1 | 기능 | 유저가 단어를 개인 단어장에 추가할 수 있다 | - 단어 마다 북마크 추가,해제 기능- 학습 중, 문제풀이 중 단어장에 추가하는 기능 |  |
|  |  | MANAGE_04 | PDF 문서출력 | LEVEL 2 | 기능 | pdf 출력 | - 개인 단어장에 추가된 단어 목록을 pdf로 출력 가능 |  |
|  |  | MANAGE_05 | 단어장 조회 | LEVEL 1 | 기능 | 유저가 추가한 단어들을 확인 할 수 있다 | - 단어 리스트, 단어, 뜻, 예문 표시- 단어장에서 단어 제거 기능 |  |
| Objective | 게임 요소 관리 | OBJECTIVE_01 | 게임요소 관리 1 | LEVEL 0 | 기능 | 경험치 획득에 따른 등급(등수) 변화 | - 사용자가 학습을 진행하며 포인트를 획득하여 등급이 상승되는 기능- 문제유형 1~2은 1점, 문제유형 3는 2점, 문제유형 4는 3점- 30, 60, 100, 200, 500 포인트마다 등급 변화 |  |
|  |  | OBJECTIVE_02 | 게임요소 관리 2 | LEVEL 2 | 기능 | 리더보드 | - 사용자들 간의 학습 경쟁을 위한 리더보드 기능- 포인트 총 획득량으로 순위 결정 |  |
|  |  | OBJECTIVE_03 | 게임요소 관리 3 | LEVEL 2 | 기능 | 도전과제 | 특정 학습 목표를 달성하거나 문제를 해결하면 보상을 주는 도전과제 기능- “~일 연속 학습”, “~문제 학습 완료” |  |

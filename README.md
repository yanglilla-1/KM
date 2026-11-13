# KM · 계명종합중기 홈페이지

> **공개 포트폴리오 프로젝트**
>
> 실서버 구현을 위한 운영 원본과 과거 개발 기록은 별도 비공개 저장소에서 관리합니다. 이 저장소에는 공개용 현재 소스만 포함합니다.
> API 키 등 인증정보를 포함하지 않으며, 지도는 키가 필요 없는 외부 링크로 연결됩니다.

진주·사천·의령 등 경남 지역의 굴삭기·포크레인 및 중장비 임대 서비스를 소개하는 **React 기반 반응형 웹사이트**입니다. 회사와 보유 장비를 살펴보고, 위치를 확인하거나 전화·외부 채널로 작업을 문의할 수 있습니다.

[회사 홈페이지](https://www.kmheavy.kr) · [소스 저장소](https://github.com/yanglilla-1/KM)

## 주요 화면

| 화면 | 경로 | 제공 기능 |
| --- | --- | --- |
| 홈 | `/presentation` | 서비스·작업 지역 소개, 문의 카드, Instagram 게시물 |
| 회사정보 | `/pages/company/aboutUs` | 회사 소개, 장비 사진 갤러리 및 확대 보기 |
| 찾아오시는길 | `/pages/company/FindUs` | 카카오맵 위치 링크, 주소 안내 및 복사 |
| 견적문의 | `/pages/company/author` | 네이버 플레이스 등 외부 문의 채널 안내 |
| 견적전화 | `/tel` | 전화번호 안내 및 전화 앱 연결 |

루트 주소와 정의되지 않은 경로는 홈으로 이동합니다. 모바일에서는 견적전화 화면 진입 시 전화 앱 열기를 시도하고, 3초 뒤 회사 홈페이지로 이동합니다. 실제 전화 연결 동작은 기기와 브라우저에 따라 달라질 수 있습니다.

## V2.0 UI/UX 개선

- 본문·메뉴 글자 크기와 명암을 조정해 가독성 개선
- 모바일 줄바꿈, 여백, 카드 및 버튼 배치 정리
- 전화·메뉴 버튼의 터치 영역 확대
- 회사정보와 견적전화 화면에 공통 테마 적용
- 정보·SNS 메뉴와 견적전화 버튼에 아이콘 추가
- Instagram·Threads의 `barbourket_tv` 계정 연결
- 유튜브는 링크 없이 공사중으로 표시
- Vite 기반 개발·빌드 환경으로 전환하고 미사용 소스 정리

## 기술 구성

아래 버전은 저장소의 `package.json` 기준입니다.

| 항목 | 구성 |
| --- | --- |
| UI | React / React DOM 19.3.1 |
| 컴포넌트·스타일 | Material UI 9.5.0, Emotion |
| 라우팅 | React Router DOM 7.18.5 |
| 개발·빌드 | Vite 8.3.8 |
| 테스트 | Vitest 5.1.0 |
| 코드 검사 | ESLint 9.39.5 |
| 위치 안내 | API 키가 필요 없는 카카오맵 외부 링크 |
| 디자인 기반 | Creative Tim Material Kit 2 React |

## 프로젝트 구조

```text
KM/
├── public/                       # 아이콘, 검색엔진 설정, 공유 이미지
├── src/
│   ├── assets/
│   │   ├── images/               # 회사·장비 이미지
│   │   └── theme/                # 색상, 타이포그래피, 컴포넌트 테마
│   ├── components/               # MKBox, MKButton, MKTypography
│   ├── examples/                 # 공통 내비게이션, 푸터, 카드
│   ├── pages/
│   │   ├── Presentation/         # 홈 및 소개 섹션
│   │   ├── company/
│   │   │   ├── aboutUs/          # 회사 소개와 장비 갤러리
│   │   │   ├── FindUs/           # 지도와 주소 안내
│   │   │   └── Author/           # 견적문의 채널
│   │   └── tel/                  # 견적전화
│   ├── App.jsx                   # 테마 적용과 페이지 라우팅
│   ├── index.jsx                 # React 진입점
│   ├── routes.jsx                # 정보·SNS 메뉴 구성
│   ├── footer.routes.jsx         # 회사 및 오픈소스 안내
│   └── upgrade.test.jsx          # 테마·페이지 렌더링 회귀 테스트
├── index.html                    # HTML 진입점과 메타 정보
├── vite.config.mjs               # 경로 별칭, 빌드·테스트 설정
├── eslint.config.mjs             # 코드 검사 설정
├── genezio.yaml                  # 기존 Genezio 배포 설정
└── package.json                  # 의존성과 실행 명령
```

## 로컬 실행

Node.js **22.13 이상**, npm **10 이상**이 필요합니다.

```bash
git clone https://github.com/yanglilla-1/KM.git
cd KM
npm ci
npm start
```

개발 서버 실행 후 터미널에 표시되는 주소에서 확인할 수 있습니다.

## 검사 및 빌드

```bash
npm run lint
npm test -- --run
npm run build
```

빌드 결과는 `build/` 폴더에 생성됩니다. 결과물을 로컬에서 확인하려면 다음 명령을 실행합니다.

```bash
npm run preview
```

V2.0 변경 시 코드 검사, 프로덕션 빌드와 기존 회귀 테스트 6개가 통과했습니다. 테스트는 테마·페이지 렌더링 확인용이며, 외부 지도·SNS 서비스 및 실제 모바일 전화 연결까지 검증하지는 않습니다.

## 외부 서비스 및 배포

- 지도 SDK와 API 키를 사용하지 않습니다. 카카오맵 외부 링크에서 위치를 확인합니다.
- Instagram 게시물, 네이버 플레이스, SNS 링크는 각 외부 서비스 상태에 영향을 받습니다.
- 자체 견적 접수 서버나 회원·결제 시스템은 포함하지 않습니다. 문의는 전화 또는 외부 채널로 연결됩니다.
- 정적 호스팅에는 `build/` 내용을 게시합니다. 페이지 URL 직접 접근을 위해 SPA fallback을 `index.html`로 설정해야 합니다.
- `genezio.yaml`에는 
pm install` → 
pm run build`, 게시 폴더 `build/` 설정이 있습니다.
- 저장소의 V2.0 머지와 운영 사이트 배포는 별개입니다. V2.0의 운영 배포 완료 여부는 아직 확인되지 않았습니다.

## 수정 위치 안내

| 변경할 내용 | 파일·폴더 |
| --- | --- |
| 정보·SNS 메뉴 및 링크 | `src/routes.jsx` |
| 회사 기본 정보·푸터 | `src/footer.routes.jsx` |
| 전화번호·전화 연결 동작 | `src/pages/tel/index.jsx` |
| 지도·주소 안내 | `src/pages/company/FindUs/sections/Information.jsx` |
| 공통 색상·글자 크기 | `src/assets/theme/base/` |
| 페이지 추가·라우팅 | `src/App.jsx` |

전화번호와 주소를 변경할 때는 홈 소개 카드 등 다른 화면의 표시 내용도 함께 확인해야 합니다.

## 라이선스 및 출처

Material Kit 2 React를 기반으로 제작했습니다.

Copyright 2023 Creative Tim. 원본 코드의 저작권·라이선스 고지를 유지합니다.

[Creative Tim 라이선스 안내](https://www.creative-tim.com/license)




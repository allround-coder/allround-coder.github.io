---
title: "React.ts와 Go로 개인 웹사이트 만들기: 파트 1"
description: ""
coverImage: ""
date: 2024-05-01 16:49
ogImage:
  url:
tag: Tech
originalTitle: "Create a personal website with React.ts and Go: part 1"
link: "https://medium.com/@axellmartinezdev/create-a-personal-website-with-react-ts-and-go-part-1-42a883005c14"
---

# 개요:

컴퓨터 과학 전공 학생으로서, 가장 중요한 일 중 하나는 개인 웹사이트를 만드는 것입니다. 이 사이트는 개인 스토리텔러가 되어 잠재적인 채용자에게 자신을 마케팅하는 가장 좋은 방법 중 하나가 될 것입니다. 여러분은 프로젝트를 보여주고, 이야기를 전하며, 무엇보다도 풀 스택 개발 기술을 뽐낼 수 있을 것입니다. 이전에 웹사이트를 만들어본 적이 없고 개인 웹사이트를 만드는 방법에 대해 궁금하다면, 이 시리즈의 기사들이 여러분에게 도움이 될 것입니다. 저는 이 시리즈를 마무리한 후에도 이 모든 시리즈를 제 개인 웹사이트에 게시할 것입니다!

# 필요한 것:

첫 번째 부분에서는 장치에 다음이 설치되어 있어야 합니다:

- Markdown
- Code Editor (e.g. Visual Studio Code)
- Browser (e.g. Google Chrome)

<div class="content-ad"></div>

- Node.js (v21.7.1을 사용 중)
- Npm (v10.5.0을 사용 중)

이 프로젝트에서는 MacOs를 사용할 것이므로 Windows를 사용하는 경우 단계가 다를 수 있습니다.

# 프로젝트 템플릿 생성:

프로젝트 파일을 생성할 위치를 선택하세요. 설정이 모든 파일을 포함하는 폴더를 생성합니다. 저는 문서 디렉토리를 선택할 것입니다. 선택한 폴더로 이동한 후 다음 명령을 사용하여 Vite를 빌드 툴로 사용해 React 애플리케이션을 만드세요:

<div class="content-ad"></div>

```js
npm create vite@latest
```

프로젝트 이름을 생성하고 여러 설정 옵션 중에서 선택하라는 프롬프트가 표시됩니다. 프레임워크 옵션으로 React를 선택하고 변형 옵션으로 Typescript를 선택해주세요. 이후에 다음 명령을 실행하여 프로젝트를 초기화하세요:

```js
cd personalwebsitemedium
npm install
```

시작하기 전에 해야 할 마지막 작업은 tailwind를 설치하는 것입니다. 이 도구는 컴포넌트 스타일링 프로세스를 간소화할 것입니다. 프로젝트의 루트 폴더에서 다음 명령을 실행하세요.```

<div class="content-ad"></div>

```js
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

tailwind.config.js 파일에서 'content: []' 항목을 다음과 같이 변경하십시오:

```js
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

마지막으로, index.css 파일 내용을 다음 라인으로 대체하십시오.

<div class="content-ad"></div>

```js
@tailwind 기본;
@tailwind 구성요소;
@tailwind 유틸리티;
```

이제 이 폴더를 선택한 IDE 또는 텍스트 편집기에서 열 수 있습니다.

# React란:

React는 반응적이고 빠른 사용자 인터페이스를 생성하는 과정을 신속하게 진행할 수 있게 해주는 JavaScript 패밀리 라이브러리(마치 프레임워크처럼 느껴짐)입니다. 다른 도구들과 구별되는 점은 컴포넌트 기반 아키텍처입니다. 우리는 재사용 가능하고 자체 상태를 관리하는 조합 가능한 UI 조각을 만들 수 있습니다. 화면의 내용을 업데이트해야 할 때, 타이머나 색상과 같은 것을 더 이상 전체 페이지를 새로 고칠 필요가 없습니다. React는 개별 컴포넌트를 업데이트할 수 있는 가상 DOM이라는 것을 사용하여 각 구성 요소의 업데이트를 허용합니다(참고로 컴포넌트의 모든 자식도 새로 고침이 됩니다).```

<div class="content-ad"></div>

탁월한 도구이자 업계 표준인 React는 사용하기 정말 즐거운 것이기도 합니다. React를 유형과 함께 사용하면 웹 개발을 힘들게 만드는 귀찮은 불일치와 무작위 런타임 오류를 많이 제거할 수 있어요.

# 파트 1 결론

프로젝트를 설정하고 React를 사용하는 이유를 배웠습니다! 다음에는 개인 웹사이트의 뼈대를 만드는 작업을 시작할 예정이에요.

---
title: "리액트 19에서 기대할 수 있는 것들"
description:
coverImage: "/assets/img/WhattoexpectfromReact19_0.png"
date: 2024-05-01 16:21
author:
  name: Allround Coder
ogImage:
  url: "/assets/img/WhattoexpectfromReact19_0.png"
tag: sitemap
originalTitle: "What to expect from React 19"
link: "https://medium.com/@onix_react/what-to-expect-from-react-19-e033899f919f"
---

<img src="/assets/img/WhattoexpectfromReact19_0.png" />

React 19는 새로운 기능의 파도를 가져와서 개발자들이 상태, 오류 및 비동기 작업을 다루는 방식을 변화시킵니다. 이 업데이트는 개발자들에게 권한을 부여하여 작업 흐름을 더 원활하게 만들고 애플리케이션을 더 빠르게 만듭니다. 최신 강화 기능을 자세히 살펴보면 개발을 개선하고 효율성을 높이는 방법을 탐색할 수 있습니다.

# React 19에서 새로운 기능 소개 🚀

## 비동기 함수를 위한 작업

<div class="content-ad"></div>

React 19은 Actions를 소개함으로써 비동기 요청 처리를 간단하게 만들었습니다. 이 기능은 보류 중인 상태, 오류 및 낙관적 업데이트를 자동으로 관리해 줍니다. useTransition을 활용하여 개발자들은 이제 UI가 반응하는 동안 데이터 변경이 발생하는 비동기 작업을 더 직관적으로 처리할 수 있습니다.

```js
// Actions에서 보류 중인 상태 사용하기
function UpdateName({}) {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      }
      redirect("/path");
    });
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}
```

## 간소화된 폼 처리

새로운 `form` Actions는 폼 제출을 자동화하여 폼 상태를 내장 처리하며 useActionState 훅을 통해 seamlessly 결과를 관리합니다. 이 훅은 이전 릴리스에서의 useFormState를 대체합니다.```

<div class="content-ad"></div>

```js
// <form> 액션과 useActionState 사용
function ChangeName({ name, setName }) {
  const [error, submitAction, isPending] = useActionState(async (previousState, formData) => {
    const error = await updateName(formData.get("name"));
    if (error) {
      return error;
    }
    redirect("/path");
    return null;
  }, null);

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>
        업데이트
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
```

## useOptimistic으로 낙관적 업데이트하기

useOptimistic 훅을 사용하면 실제 데이터 변이가 백그라운드에서 발생하는 동안 UI에서 변경 사항을 즉시 표시할 수 있습니다. 이 훅은 임시 UI 상태를 관리하며 오류 발생 시 원래 상태로 복원합니다.

```js
function ChangeName({ currentName, onUpdateName }) {
  const [optimisticName, setOptimisticName] = useOptimistic(currentName);

  const submitAction = async (formData) => {
    const newName = formData.get("name");
    setOptimisticName(newName);
    const updatedName = await updateName(newName);
    onUpdateName(updatedName);
  };

  return (
    <form action={submitAction}>
      <p>당신의 이름은: {optimisticName}</p>
      <p>
        <label>이름 변경:</label>
        <input type="text" name="name" disabled={currentName !== optimisticName} />
      </p>
    </form>
  );
}
```

<div class="content-ad"></div>

## useFormStatus를 사용하여 양식 상태에 액세스하기

useFormStatus 훅을 이용하면 양식 제출 상태에 직접 액세스할 수 있어 prop 전달 없이 제출 상태를 반영해야 하는 컴포넌트를 디자인하는 데 이상적입니다.

```js
import { useFormStatus } from "react-dom";

function DesignButton() {
  const { pending } = useFormStatus();
  return <button type="submit" disabled={pending} />;
}
```

## 새로운 Reading API: use

<div class="content-ad"></div>

새로운 사용 API는 렌더 단계 내에서 프로미스 및 컨텍스트와 같은 리소스를 읽기 위해 설계되었으며, 조건부 읽기를 지원합니다. 이 API는 React 컴포넌트 내에서 데이터 종속성을 더 효과적으로 관리하는 데 도움이 됩니다.

React 19의 이러한 개선 사항은 생산성과 효율성을 향상시키기 위해 설계되었으며, 개발자들이 동적이고 사용자 친화적인 애플리케이션을 더 많이 만들도록 도와줍니다. 자세한 문서 및 추가 예제를 보려면 React 공식 문서를 방문해주세요.

```js
import { use } from "react";

function Comments({ commentsPromise }) {
  // `use`는 프로미스가 해결될 때까지 일시 중단됩니다.
  const comments = use(commentsPromise);
  return comments.map((comment) => <p key={comment.id}>{comment}</p>);
}

function Page({ commentsPromise }) {
  // Comments에서 `use`가 일시 중단되면
  // 이 Suspense 경계가 표시됩니다.
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comments commentsPromise={commentsPromise} />
    </Suspense>
  );
}
```

# React 19의 React 서버 컴포넌트 및 서버 액션 🏗️

<div class="content-ad"></div>

React 19은 서버 구성 요소 및 서버 작업의 도입으로 React 애플리케이션의 기능을 향상시켰습니다. 이러한 기능을 사용하면 특정 작업을 서버로 오프로드하여 성능 및 리소스 활용을 최적화할 수 있습니다.

## 서버 구성 요소

React 19의 서버 구성 요소는 빌드 시 CI 서버에서 또는 웹 서버에서 요청마다 미리 렌더링할 수 있습니다. 이 기능은 렌더링 환경을 클라이언트 애플리케이션 또는 전형적인 서버 측 렌더링(SSR) 설정과 분리합니다. React 19는 Canary 채널의 모든 서버 구성 요소 기능을 통합하여, 서버 구성 요소를 사용하는 라이브러리에서 React 19를 동료 종속성으로 지정할 수 있도록 합니다.

## 서버 작업

<div class="content-ad"></div>

서버 작업(Server Actions)은 클라이언트 구성 요소(Client Components)에서 서버에서 실행되는 비동기 함수를 호출할 수 있는 새로운 기능입니다. "use server" 지시문과 함께 정의되며, 이러한 작업은 프레임워크가 자동으로 서버 함수를 클라이언트 구성 요소에 연결할 수 있도록 합니다. 클라이언트에서 호출되면 서버에 함수 실행을 요청하고 결과를 반환합니다. 이 프로세스는 프레임워크에 의해 완전히 관리되어 매끄럽게 진행됩니다.

React 19에서 서버 구성 요소를 직접 React에 통합하는 것은 여러 이점을 제공합니다:

- SEO 향상: 서버 렌더링된 구성 요소를 포함하면 웹 크롤러가 더 많은 접근 가능한 콘텐츠에 액세스할 수 있어 검색 엔진 최적화가 향상됩니다.
- 향상된 성능: 서버 구성 요소는 초기 페이지로드와 전반적인 성능 향상에 기여하며, 특히 콘텐츠 로드가 많은 애플리케이션에 특히 유용합니다.
- 효율적인 서버 측 실행: 서버 구성 요소를 사용하면 서버에서 코드를 실행하는 것이 매끄럽고 효율적이며 API 호출과 같은 작업을 용이하게 처리할 수 있습니다.

# React 19에서의 개선 사항 ⬆️

<div class="content-ad"></div>

## Ref을 프롭으로 사용하기

React 19부터는 함수 컴포넌트에서 ref를 프롭으로 접근할 수 있습니다:

```js
function MyInput({ placeholder, ref }) {
  return <input placeholder={placeholder} ref={ref} />;
}

//...
<MyInput ref={ref} />;
```

새로운 함수 컴포넌트는 더 이상 forwardRef가 필요하지 않으며, 기존 컴포넌트를 자동으로 업데이트해주는 codemod가 제공될 예정입니다. 향후 버전에서는 forwardRef가 사라질 예정입니다.

<div class="content-ad"></div>

## 수분 보충 오류에 대한 차이점

React-dom의 수분 보충 오류 보고가 향상되었습니다. 불일치에 대한 정보 없이 여러 오류가 발생하는 대신, 이제 차이점이 포함된 단일 메시지가 기록됩니다.

## Provider로서

React 19에서는 `Context.Provider` 대신 Provider로 렌더링할 수 있습니다.

<div class="content-ad"></div>

```js
const ThemeContext = createContext("");

function App({ children }) {
  return <ThemeContext value="dark">{children}</ThemeContext>;
}
```

새로운 Context 제공자들은 `Context`를 사용할 수 있으며, 기존의 제공자들은 코드 변경으로 전환됩니다. 향후 버전에서는 `Context.Provider`가 사용 중지될 것입니다.

## Ref를 위한 정리 함수

React 19는 ref 콜백에서 정리 함수를 반환하는 것을 지원하여, 컴포넌트가 언마운트될 때 더 나은 자원 관리를 할 수 있게 도와줍니다.

<div class="content-ad"></div>

```js
<input
  ref={(ref) => {
    // ref 생성됨

    // 새로운: DOM에서 요소가 제거될 때 ref를 재설정하는 정리 함수 반환
    return () => {
      // ref 정리
    };
  }
/>
```

컴포넌트가 언마운트되면 React가 ref 콜백에서 반환된 정리 함수를 호출합니다.

## useDeferredValue 초기 값

React 19에서 useDeferredValue에 initialValue 옵션이 추가되었습니다.

<div class="content-ad"></div>

```jsx
function Search({ deferredValue }) {
  // 초기 렌더링 시에 값은 ''로 설정됩니다.
  // 그 후에 deferredValue로 재 렌더링이 예약됩니다.
  const value = useDeferredValue(deferredValue, "");

  return <Results query={value} />;
}
```

initialValue가 제공될 때, useDeferredValue는 컴포넌트의 초기 렌더링에 대한 값으로 반환하고, 백그라운드에서 deferred value를 사용하여 다시 렌더링이 예약됩니다.

# React 19에서 향상된 자원 지원 🤝

## 문서 메타데이터 지원

<div class="content-ad"></div>

React 19에서는 컴포넌트 내에서 문서 메타데이터 태그(`title`, `link`, `meta`)를 직접 렌더링하는 기능을 네이티브로 지원하게 되었습니다. 이를 통해 React 애플리케이션에서 메타데이터를 더 쉽게 관리할 수 있으며, react-helmet과 같은 타사 라이브러리에 의존하지 않고 다양한 렌더링 시나리오와의 호환성을 보장할 수 있습니다.

## 스타일시트 지원

React 19에서는 외부 및 인라인 스타일시트를 지원함으로써 스타일시트 관리를 향상시켰습니다. 컴포넌트가 스타일시트의 우선순위를 지정할 수 있어 React가 DOM에 삽입 순서를 효율적으로 처리할 수 있습니다. 이는 특히 동시 렌더링 및 서버 측 렌더링 시나리오에서 스타일시트 처리를 단순화합니다.

## 비동기 스크립트 지원

<div class="content-ad"></div>

React 19은 비동기 스크립트를 컴포넌트 트리 어디에서든 렌더링할 수 있도록 지원을 개선했어요. React는 비동기 스크립트들을 중복으로 로드하지 않고 한 번만 로딩하도록 보장해줘요. 여러 컴포넌트에서 렌더링되더라도 최적화된 처리를 하죠. 이 향상된 기능은 비동기 스크립트를 React 애플리케이션에 통합하는 작업을 좀 더 간편하게 만들어줍니다. 이전처럼 이동이나 중복 문제를 관리할 필요가 없어요.

## 리소스 사전로드 지원

React 19에서는 초기 로드 및 이후 업데이트 중에 페이지 성능을 최적화하기 위해 브라우저 리소스를 로딩하고 사전로드하는 새로운 API가 도입되었어요. 개발자는 이러한 API를 사용하여 DNS 요청 사전로드, 서버 사전연결 및 글꼴, 스타일시트 및 스크립트 사전로드를 할 수 있어요. 이를 통해 리소스 로딩 효율과 사용자 경험이 개선됩니다.

## Custom Elements 지원

<div class="content-ad"></div>

리액트 19는 이제 모든 Custom Elements Everywhere 테스트를 통과하며 커스텀 엘리먼트를 완전히 지원합니다. 이 업데이트는 서버 측 및 클라이언트 측 렌더링 중 알 수 없는 props를 적절하게 처리하여 이전의 도전 과제를 해결했습니다. 이 구현을 이끈 Joey Arhar에게 감사드립니다.

# 서드파티 스크립트와 확장 기능과의 향상된 호환성 🔄

React 19는 가수분해 중에 서드파티 스크립트와 브라우저 확장 프로그램과의 호환성을 향상시켰으며, 사용자 경험을 더욱 부드럽게 만들기 위해 방해와 오류를 최소화했습니다.

## 개선된 가수분해 호환성

<div class="content-ad"></div>

수분을 공급하는 동안 React가 제3자 스크립트로 인한 불일치를 식별하면 예기치 않은 태그를 바ypass해 다시 렌더링 오류를 유발하는 대신 스마트하게 처리합니다. 이 접근 방식은 외부 스크립트 및 확장 프로그램으로 인한 잠재적인 중단을 최소화하고 사용자 경험을 더욱 부드럽게 만듭니다.

## 개선된 오류 보고

React 19에서 오류 보고는 중복을 제거하고 구성 요소 실패에 대한 더 명확한 통찰력을 제공하기 위해 간소화되었습니다. 이전에는 잡힌 오류에 대해 중복된 오류가 발생하여 콘솔을 중복된 메시지로 어지럽혔습니다. React 19에서는 필요한 모든 정보가 포함된 단일 오류 메시지를 기록함으로써 이를 간소화합니다.

- onCaughtError: Error Boundary 내에서 오류를 catch할 때 트리거됩니다.
- onUncaughtError: 오류가 throw되지만 Error Boundary에 catch되지 않을 때 활성화됩니다.

<div class="content-ad"></div>

이러한 업데이트로 오류 처리를 보다 강력하게 제어하여 원활한 디버깅 경험을 제공합니다.

요약하자면, React 19는 간소화된 상태 관리, 개선된 오류 처리, 그리고 간편화된 비동기 작업과 같은 강력한 새로운 기능을 소개합니다. 서버 컴포넌트와 서버 액션을 통해 성능과 자원 활용을 최적화합니다. 제3자 스크립트 및 확장 기능과의 향상된 호환성, 그리고 더 나은 오류 보고 기능은 React 19를 웹 개발의 게임 체인저로 만듭니다. 🚀🌐

텔레그램 / 인스타그램 / 페이스북 / 쓰레드 / 깃허브

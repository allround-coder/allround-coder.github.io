---
title: "장치 방향 이벤트를 활용한 애니메이션"
description: ""
coverImage: "/assets/img/2024-05-01-AnimationwithDeviceOrientationevent_1.png"
date: 2024-05-01 17:10
ogImage:
  url: /assets/img/2024-05-01-AnimationwithDeviceOrientationevent_0.png
tag: Tech
originalTitle: "Animation with DeviceOrientation event"
link: "https://medium.com/javascript-in-plain-english/animation-with-deviceorientation-event-dc27209af0b7"
---

이 기사는 이 기사의 계속입니다- `메시징 애플리케이션을위한 그라데이션 배경

![이미지](https://miro.medium.com/v2/resize:fit:1200/0*1YpGoILEvnv-WInQ.gif)

배경을 애니메이션화하기 위해 대부분의 경우 배경 위치-x 또는 배경 위치-y를 사용하는 것이 충분합니다. 이러한 애니메이션은 일반적으로 버튼을 클릭하거나 입력에 초점을 맞추거나 요소 위로 마우스를 올리는 등 사용자 상호 작용에 의존합니다. 그러나 오늘 논의할 시나리오는 다릅니다. 이 페이지나 응용 프로그램의 요소와 상호 작용하지 않아도됩니다. 대신 사용자가 사용 중인 디바이스의 방향, 특히 폰이나 태블릿과 같은 센서가 장착된 모바일 장치인 경우에 의존합니다. 이 접근 방식은 특히 타이포그래피 관련 애니메이션을 통합하고 싶을 때 유용합니다.

우리가 남은 곳에서 이어지면 JSX 구조와 CSS 파일이 준비되어 있습니다.

<div class="content-ad"></div>

우리가 해야 할 일은 장치 방향을 확인하고 이에 따라 애니메이션을 수행하는 것입니다.

이를 위해 DeviceOrientation이라는 이벤트를 사용해야 합니다. 이 이벤트는 알파, 베타 및 감마 값만 제공해요. 이 값들이 무엇을 의미하는지는 약간의 물리학 지식이 필요합니다. 방향 데이터에 대한 자세한 설명은 MDN의 링크에서 확인할 수 있어요.

![이미지](/assets/img/2024-05-01-AnimationwithDeviceOrientationevent_1.png)

요약하면 DeviceOrientation을 수신하면 사용할 수 있는 3가지 값을 반환합니다. 알파, 베타 및 감마 값이에요.

<div class="content-ad"></div>

위는 z축, x축 및 y축 주위의 회전에 해당합니다.

## 코딩을 시작해봅시다

웹에서 이벤트를 듣은 적이 있는 사람은 무엇인지 알고 있습니다.

```js
window.addEventListener("click", function() {…})
```

<div class="content-ad"></div>

비슷한 작업을 할 것입니다. 클릭 대신 deviceorientation을 사용할 것입니다.

```js
window.addEventListener("deviceorientation", handleDeviceOrientation);
```

handleDeviceOrientation 메서드 내에서는 아래와 같이 작성할 수 있습니다:

JSXELEMENT에 대해서는 색상 속성을 적용한 요소에 ref 속성을 추가하고 배경 위치를 업데이트해야 합니다. 아래의 코드에서는 alpha, beta 및 gamma 값을 구조 분해했지만 실제로 사용할 값만 선택하면 됩니다.

<div class="content-ad"></div>

이것에 대해서는 '베타'만 사용하여 `background-position-y`를 업데이트했습니다. '베타'는 X축을 중심으로 회전하는 데 사용됩니다.

해결책으로는 여기서 Oleksii Trehkleb가 한 것과 거의 동일하게 useDeviceOrientation.ts를 사용할 것입니다. 그래서 Oleksii Trekhleb에게 예의를 표한다는 점을 밝히고 싶습니다.

이 시점에서 사용자는 버튼을 가지고 있어야 하며 그 버튼을 클릭하면 권한이 부여되고 그럼 'deviceorientation' 이벤트를 수신하고 배경을 애니메이션화할 수 있습니다.

여기까지입니다! 이것은 매우 기본적인 예제이지만 우리는 원한다면 훨씬 더 많은 작업을 할 수 있습니다. 내가 먼저 떠오르는 것은 타이포그래피 영역입니다.

<div class="content-ad"></div>

데모: https://gyroscope-react.vercel.app/
저장소: https://github.com/gokhanipek/gyroscope-react

읽어주셔서 감사합니다!

# 일반어로 말하자면 🚀

In Plain English 커뮤니티의 일원이 되어 주셔서 감사합니다! 떠나시기 전에:

<div class="content-ad"></div>

- 작가를 칭찬하고 팔로우하는 것을 잊지 마세요! 👏️️
- 팔로우하기: X | LinkedIn | YouTube | Discord | Newsletter
- 다른 플랫폼에서 만날 수 있어요: Stackademic | CoFeed | Venture | Cubed
- PlainEnglish.io에서 더 많은 콘텐츠를 만나보세요.

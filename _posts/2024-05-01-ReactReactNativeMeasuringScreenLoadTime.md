---
title: "리액트, 리액트 네이티브: 화면 로드 시간 측정하기"
description: ""
coverImage: "/assets/img/React-ReactNativeMeasuringScreenLoadTime_0.png"
date: 2024-05-01 16:51
ogImage:
  url: "/assets/img/React-ReactNativeMeasuringScreenLoadTime_0.png"
tag: Tech
originalTitle: "React , React Native: Measuring Screen Load Time"
link: "https://medium.com/@i-ads/performance-measuring-screen-load-time-0c3322b2a2a4"
---

## React 및 React Native 앱을 위한 커스텀 성능 모니터링을 쉽게 만드는 방법

![React 및 React Native 앱의 화면 로드 시간 측정](/assets/img/React-ReactNativeMeasuringScreenLoadTime_0.png)

이 기사는 화면이 데이터를 로드하고 UI 요소를 그리는 데 걸리는 시간을 측정하는 것을 목표로 합니다. 사용자가 UI와 상호 작용하기 전에 이러한 단계를 거쳐야 합니다.

로드 시간을 측정하는 것은 단순한 작업이 아니라 빠르고 부드러운 사용자 경험을 보장하는 중요한 단계입니다. 새로운 기능 개발이나 리팩터링이 앱의 성능에 긍정적으로 또는 부정적으로 영향을 미쳤는지를 판단하는 데 중요한 열쇠 역할을 합니다.

<div class="content-ad"></div>

걱정 마세요. 이 안내서를 완료한 후에는 React 또는 React Native 앱에 손쉽게 통합할 수 있는 커스텀 훅을 만들어 로드 시간을 측정할 수 있을 겁니다.

# 구현

이 구현에 대해 살펴봅시다. 첫 번째 작업은 사용할 속성을 정의하는 것입니다. 우리의 목표는 모든 화면에 쉽게 통합되어 시간을 측정할 수 있는 솔루션을 만드는 것입니다.

- screenName: 정의된 화면 이름
- isLoading: 로딩이 완료되었는지 나타내며 사용자가 상호 작용을 시작할 수 있는지를 보여줍니다

<div class="content-ad"></div>

위 두 가지를 설정하면 사용자 지정 훅을 만들 준비가 되었습니다.

- useEffect에서 performance.now()로 시간 측정을 시작하고 사용자가 화면에 도착하면 시작 시간을 설정합니다.
- performance.now() 방법은 밀리초 단위의 고해상도 타임스탬프를 반환합니다.
- 데이터가 로드된 후 endTime을 설정하고 종료 및 시작 시간의 차이를 측정하여 로드하는 데 걸린 시간을 계산합니다.

# 측정 시작

지금까지 구축한 것을 사용하여 시간을 측정해 봅시다. 이를 위해 속성과 함께 useGetPerformance 훅을 가져와 호출하기만 하면 됩니다.

<div class="content-ad"></div>

## 리액트 네이티브

## 리액트

이제 콘솔을 열어보세요; 계산된 밀리초가 포함된 로그 메시지를 볼 수 있어요.

![이미지](/assets/img/React-ReactNativeMeasuringScreenLoadTime_1.png)

<div class="content-ad"></div>

Datadog: [링크](https://docs.datadoghq.com/service_management/events/)

Amplitude: [링크](https://www.docs.developers.amplitude.com/)

좋은 코딩 되세요!

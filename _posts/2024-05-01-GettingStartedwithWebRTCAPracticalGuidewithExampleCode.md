---
title: "웹RTC 시작하기: 예제 코드와 함께 실용적인 가이드"
description: ""
coverImage: "/assets/img/2024-05-01-GettingStartedwithWebRTCAPracticalGuidewithExampleCode_0.png"
date: 2024-05-01 17:13
ogImage: 
  url: /assets/img/2024-05-01-GettingStartedwithWebRTCAPracticalGuidewithExampleCode_0.png
tag: Tech
originalTitle: "Getting Started with WebRTC: A Practical Guide with Example Code"
link: "https://medium.com/@fengliu_367/getting-started-with-webrtc-a-practical-guide-with-example-code-b0f60efdd0a7"
---


<img src="/assets/img/2024-05-01-GettingStartedwithWebRTCAPracticalGuidewithExampleCode_0.png" />

WebRTC(Web Real-Time Communication)은 웹 브라우저와 모바일 애플리케이션 간에 실시간 오디오, 비디오 및 데이터 공유를 직접 가능하게 하는 강력한 기술입니다. 비디오 회의 앱, 라이브 스트리밍 플랫폼 또는 상호 작용하는 웹 애플리케이션을 구축 중이든, WebRTC는 통신 분야에서 게임 체인저로 인정받았습니다.

이 블로그에서는 WebRTC를 처음부터 배우는 여정에 떠날 것입니다. 핵심 개념을 탐구하고 아키텍처를 이해하며 직접 코딩 예제로 들어갈 것입니다. 마지막에는 자체 WebRTC 기반 애플리케이션을 만들기 위한 기본 지식을 갖게 될 것입니다.

# WebRTC의 기본 개념 이해

<div class="content-ad"></div>

# 웹RTC란 무엇인가요?

웹RTC (Web Real-Time Communication)은 웹 브라우저와 모바일 애플리케이션 간에 직접 인터넷을 통해 실시간 통신을 가능하게 하는 오픈 소스 기술 모음입니다. 플러그인이나 추가 소프트웨어 없이 피어 투 피어 오디오, 비디오 및 데이터 공유를 가능하게 합니다. 웹RTC는 비디오 회의, 음성 통화, 라이브 스트리밍, 온라인 게임 등의 애플리케이션을 구축하는 데 널리 사용됩니다.

![웹RTC 이미지](/assets/img/2024-05-01-GettingStartedwithWebRTCAPracticalGuidewithExampleCode_1.png)

# 웹RTC는 어떻게 작동하나요?

<div class="content-ad"></div>

- 미디어 캡처: WebRTC는 웹 브라우저와 모바일 앱이 사용자의 미디어 장치(카메라 및 마이크와 같은)에 액세스하여 오디오 및 비디오 스트림을 캡처할 수 있습니다.
- 시그널링: 두 피어가 통신하기 전에 연결을 설정해야 합니다. 시그널링 프로세스는 피어 간에 메타데이터 및 제어 메시지를 교환하여 세션 설정을 협상하고 네트워크 세부 사항을 처리합니다.
- 피어 연결: 시그널링 프로세스가 완료되면 두 장치 간에 직접적인 피어 간 연결이 estable됩니다. WebRTC는 안전하고 효율적인 피어 연결 프로토콜을 사용하여 오디오, 비디오 및 데이터 스트림을 전송합니다.
- 코덱 및 암호화: WebRTC는 다양한 오디오 및 비디오 코덱을 지원하여 미디어 스트림을 효율적으로 인코딩하고 전송합니다. 또한 피어 간 통신을 보호하기 위해 암호화를 사용하여 개인 정보 보호 및 데이터 무결성을 보장합니다.
- NAT 및 방화벽 통과: WebRTC는 다양한 네트워크에서 작동하도록 설계되었으며 네트워크 주소 변환기 (NAT)와 방화벽을 처리할 수 있습니다. Interactive Connectivity Establishment (ICE)와 같은 기술을 사용하여 직접 통신 경로를 발견하고 설정합니다.
- 데이터 채널: 오디오 및 비디오 스트림 외에도 WebRTC에는 데이터 채널이 포함되어 있어 피어가 비미디어 데이터를 직접 교환하여 실시간 데이터 공유가 가능합니다.

WebRTC는 Google Chrome, Mozilla Firefox, Safari 및 Microsoft Edge를 포함한 주요 웹 브라우저에서 지원됩니다. 오픈 소스 성격, 구현 용이성 및 서드파티 플러그인 없이 실시간 통신 애플리케이션을 빌드할 수 있는 능력에 의해 채택되었습니다.

# WebRTC 필수 API 알아보기

WebRTC(Web Real-Time Communication)를 사용하려면 웹 브라우저 간의 실시간 통신을 용이하게 해주는 필수 API 및 라이브러리에 익숙해져야 합니다. WebRTC는 웹 어플리케이션 내에서 피어 투 피어 오디오, 비디오 및 데이터 스트리밍을 직접 지원하여 비디오 회의, 음성 통화 및 기타 실시간 통신 기능을 구축하기에 이상적입니다. 아래는 알아야 할 필수 구성 요소입니다:

<div class="content-ad"></div>

# getUserMedia API

이 API를 사용하면 사용자의 미디어 장치(카메라 및 마이크)에 접근하고 RTCPeerConnection과 함께 사용할 수 있는 MediaStream 객체를 제공합니다.

# RTCPeerConnection API

이 API는 WebRTC의 핵심이며 브라우저 간의 피어 투 피어 연결을 설정하고 관리하는 역할을 담당합니다. ICE(Interactive Connectivity Establishment) 협상, NAT 트래버스 및 미디어 스트림 전송을 처리합니다.

<div class="content-ad"></div>

# RTCDataChannel API

이 API는 서버가 필요하지 않고 피어 간 데이터 통신 기능을 제공합니다. 피어 간에 임의의 데이터를 보내는 데 유용합니다.

# 시그널링

WebRTC는 직접 연결을 설정하기 전에 피어 간 연결 세부 정보를 교환하기 위해 시그널링이 필요합니다. 이 프로세스는 WebRTC 표준에 정의되어 있지 않으며 WebSocket 또는 서버 측 응용프로그램과 같은 별도의 시그널링 메커니즘이 필요합니다.

<div class="content-ad"></div>

# 다른 WebRTC API

- MediaStream: 카메라와 마이크 같은 사용자 미디어 장치에서 오디오와 비디오 스트림에 접근할 수 있게 합니다.
- RTCIceCandidate: P2P 연결 설정 중에 사용되는 ICE candidate를 나타냅니다.
- RTCSessionDescription: 연결을 설정하는 세션 설명을 나타냅니다.

# STUN, TURN 및 ICE란 무엇인가요?

![이미지](/assets/img/2024-05-01-GettingStartedwithWebRTCAPracticalGuidewithExampleCode_2.png)

<div class="content-ad"></div>

ICE (Interactive Connectivity Establishment), STUN (Session Traversal Utilities for NAT), 그리고 TURN (Traversal Using Relays around NAT)은 웹RTC 프레임워크의 중요한 구성 요소로, 인터넷을 통한 실시간 통신을 가능하게 합니다. 이들은 방화벽이나 NAT(Network Address Translation) 장치 뒤에 위치한 클라이언트 간에도 P2P(peer-to-peer) 연결을 설정하는 데 사용됩니다.

ICE (Interactive Connectivity Establishment)은 웹RTC 클라이언트 사이의 최적의 연결 경로를 발견하고 설정하기 위해 STUN(세션 트랜버셜 유틸리티)과 TURN(네트워크 주변을 우회하는 트래버실) 서버를 결합하는 기술입니다. 이를 통해 어려운 네트워크 환경에서도 실시간 통신이 가능해집니다.

STUN (Session Traversal Utilities for NAT)는 공개 IP 주소와 포트를 발견하기 위해 사용되는 프로토콜입니다. 만약 직접적인 P2P 연결이 제한적인 네트워크 설정 때문에 불가능한 경우, TURN (Traversal Using Relays around NAT) 서버는 클라이언트 간의 미디어 스트림을 중계하여 신뢰할 수 있는 통신을 보장합니다.

<div class="content-ad"></div>

# 개발 환경 설정하기

# 리액트를 이용한 간단한 웹 페이지 만들기

먼저, 컴퓨터에 Node.js가 설치되어 있는지 확인해주세요. 그런 다음, 터미널이나 명령 프롬프트를 열고 다음 명령을 실행하여 새로운 React 앱을 만들어주세요:

```js
npx create-react-app simple-webrtc
```

<div class="content-ad"></div>

다음으로 프로젝트 디렉토리로 이동하여 웹 서버를 시작하세요.

```js
cd simple-webrtc
npm start
```

그 다음, 코드 에디터에서 프로젝트를 열어주세요. src 폴더에 메인 코드 파일이 있습니다. 웹 페이지 내용을 수정하려면 App.js를 편집할 수 있습니다.

```js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Simple Web Page</h1>
      <p>This is a basic web page built with React.</p>
    </div>
  );
}
export default App;
```

<div class="content-ad"></div>

저의 웹 페이지 예시에서는 Ant Design을 UI 라이브러리로 사용하여 제 삶을 편하게 만들겠어요. 편집을 거친 후에는 제 리액트 페이지가 다음과 같이 보일 거예요:

```js
import React from 'react';
import {Button, Typography, Input} from 'antd';
import '../App.css';

const {Title, Paragraph} = Typography;
const {TextArea} = Input;
function App() {
    const renderHelper = () => {
        return (
            <div className="wrapper">
                <Input
                    placeholder="사용자 아이디"
                    style={{width: 240, marginTop: 16}}
                />
                <Input
                    placeholder="채널 이름"
                    style={{width: 240, marginTop: 16}}
                />
                <Button
                    style={{width: 240, marginTop: 16}}
                    type="primary"
                >
                    호출
                </Button>
                <Button
                    danger
                    style={{width: 240, marginTop: 16}}
                    type="primary"
                >
                    끊기
                </Button>
            </div>
        );
    };

    const renderTextarea = () => {
        return (
            <div className="wrapper">
                <TextArea
                    style={{width: 240, marginTop: 16}}
                    placeholder='메시지 전송'
                />
                <TextArea
                    style={{width: 240, marginTop: 16}}
                    placeholder='메시지 수신'
                    disabled
                />
                <Button
                    style={{width: 240, marginTop: 16}}
                    type="primary"
                    disabled={sendButtonDisabled}
                >
                    메시지 전송
                </Button>
            </div>
        );
    };

    return (
        <div className="App">
            <div className="App-header">
                <Title>WebRTC</Title>
                <Paragraph>이것은 WebRTC 애플리케이션을 처음부터 구축하는 방법을 보여주는 간단한 데모 앱입니다. 신호 서버를 포함하며, 여러분의 프로젝트에 WebRTC를 구현하는 과정을 이해하는 데 도움이 되는 단계별 안내로 제작되었습니다.</Paragraph>
                <div className='wrapper-row' style={{justifyContent: 'space-evenly', width: '50%'}}>
                    {renderHelper()}
                    {renderTextarea()}
                </div>
                <div
                    className='playerContainer'
                    id="playerContainer"
                >
                    <video
                        id="peerPlayer"
                        autoPlay
                        style={{width: 640, height: 480}}
                    />
                    <video
                        id="localPlayer"
                        autoPlay
                        style={{width: 640, height: 480}}
                    />
                </div>
            </div>
        </div>
    );
}
export default App;
```

이제 WebRTC를 위한 기본 웹 페이지를 성공적으로 만들었습니다.

<img src="/assets/img/2024-05-01-GettingStartedwithWebRTCAPracticalGuidewithExampleCode_3.png" />
```

<div class="content-ad"></div>

# 기본 WebRTC 비디오 통화 만들기

단계 1: 로컬 미디어 스트림(카메라와 마이크) 설정하기.

```js
let localStream;

const setupDevice = () => {
    console.log('setupDevice가 호출되었습니다.');
    navigator.getUserMedia({ audio: true, video: true }, (stream) => {
        // DOM에 로컬 스트림 렌더링
        const localPlayer = document.getElementById('localPlayer');
        localPlayer.srcObject = stream;
        localStream = stream;
    }, (error) => {
        console.error('getUserMedia 오류:', error);
    });
};
```

WebRTC에서 미디어 스트림 및 제약 사항을 처리하는 것은 실시간 통신 중 오디오 및 비디오 동작을 제어하는 데 중요합니다. 사용자로부터 미디어를 요청할 때 해상도, 프레임 속도 또는 특정 장치와 같은 제약 사항을 지정할 수 있습니다. 제약 사항을 사용하여 미디어 캡처를 특정 요구 사항을 충족시키도록 맞춤화할 수 있습니다.

<div class="content-ad"></div>

```js
const constraints = {
  video: {
    width: { ideal: 1280 },
    height: { ideal: 720 },
    frameRate: { ideal: 30 },
  },
  audio: true,
};

navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {
    // 필요에 따라 미디어 스트림을 처리합니다.
  })
  .catch((error) => {
    // 제약 조건을 충족시키지 못할 경우 오류를 처리합니다.
});
```

Step 2: RTCPeerConnection 설정하기.

```js
const servers;
const pcConstraints = {
    'optional': [
        {'DtlsSrtpKeyAgreement': true},
    ],
};

// 사용자가 call 버튼을 클릭하면 RTCPeerConnection으로 p2p 연결을 생성합니다.
const callOnClick = () => {
    console.log('callOnClick이 호출되었습니다.');
    if (localStream.getVideoTracks().length > 0) {
        console.log(`비디오 장치 사용 중: ${localStream.getVideoTracks()[0].label}`);
    }
    if (localStream.getAudioTracks().length > 0) {
        console.log(`오디오 장치 사용 중: ${localStream.getAudioTracks()[0].label}`);
    }
    localPeerConnection = new RTCPeerConnection(servers, pcConstraints);
    localPeerConnection.onicecandidate = gotLocalIceCandidateOffer;
    localPeerConnection.onaddstream = gotRemoteStream;
    localPeerConnection.addStream(localStream);
    localPeerConnection.createOffer().then(gotLocalDescription);
};
// offer sdp를 처리하기 위한 async 함수
const gotLocalDescription = (offer) => {
    console.log('gotLocalDescription이 호출되었습니다:', offer);
    localPeerConnection.setLocalDescription(offer);
};
// 수신된 원격 스트림을 처리하는 async 함수
const gotRemoteStream = (event) => {
    console.log('gotRemoteStream이 호출되었습니다');
    const remotePlayer = document.getElementById('peerPlayer');
    remotePlayer.srcObject = event.stream;
};
// ice candidate를 처리하는 async 함수
const gotLocalIceCandidateOffer = (event) => {
    console.log('gotLocalIceCandidateOffer이 호출되었습니다', event.candidate, localPeerConnection.localDescription);
    // candidate 수집이 완료되면 완전한 sdp를 전송합니다.
    if (!event.candidate) {
        const offer = localPeerConnection.localDescription;
    // offer sdp를 웹소켓을 통해 시그널링 서버로 전송합니다.
        sendWsMessage('send_offer', {
            channelName,
            userId,
            sdp: offer,
        });
    }
};
```

WebRTC에서 미디어 스트림 및 제약 조건을 처리하는 것은 실시간 통신 중 오디오와 비디오 동작을 제어하는 데 중요합니다. 여기에는 미디어 스트림 및 제약 조건을 관리하는 간단한 개요가 있습니다:```

<div class="content-ad"></div>

"우리는 gotLocalIceCandidateOffer 함수를 사용하여 ICE 후보를 처리합니다. 후보들의 수집이 완료되면 완전한 SDP를 시그널링을 통해 전송합니다. event.candidate이 null이면 ICE 후보 수집이 준비된 것을 나타냅니다. ICE 후보를 처리하는 방법에는 두 가지가 있습니다. 하나는 ICE 후보를 SDP에 삽입하고 한꺼번에 모두 전송하는 것이고, 다른 하나는 각 ICE 후보를 시그널링을 통해 원격 사용자에게 전송하는 것입니다. 그럼 원격 사용자가 그것을 자신의 로컬 피어 연결로 설정합니다.

이 단계에서 RTCPeerConnection을 설정하고 오퍼 SDP를 생성했습니다. 그러나 원격 브라우저와 연결을 설정하려면 SDP를 교환할 시그널링 서버가 필요합니다.

# 시그널링 서버 구현

시그널링 서버는 WebRTC 통신에서 중요한 역할을 합니다. 피어 간 세션 정보(SDP)를 교환하여 직접적인 피어 투 피어 연결을 설정할 수 있도록 돕습니다. 시그널링 과정은 로컬 브라우저에서 생성된 SDP 오퍼를 원격 브라우저로 전송하는 것과 그 반대를 포함합니다."

<div class="content-ad"></div>

<img src="/assets/img/2024-05-01-GettingStartedwithWebRTCAPracticalGuidewithExampleCode_4.png" />

로컬 브라우저로부터 SDP 오퍼를 수신한 신호 서버는 해당 정보를 원격 브라우저로 전달합니다. 원격 브라우저는 자체의 SDP 응답을 생성하고 이를 다시 신호 서버를 통해 로컬 브라우저로 전송합니다.

이렇게 이루어지는 SDP 오퍼와 응답 교환을 통해 양쪽 브라우저가 미디어 스트림에 대한 매개변수 조정을 할 수 있습니다. 이로써 코덱, 지원하는 해상도, 실시간 피어 간 통신에 필요한 기타 설정 등에 대한 협상이 이루어집니다.

신호 서버는 실제 미디어 스트림을 전송하지 않고, 피어 간 SDP를 교환하는 메신저 역할만 수행합니다. SDP 교환이 완료되면 미디어 스트림은 피어 간 직접 전송되어 실시간 통신을 위한 직접적이고 안전한 연결이 구축됩니다.

<div class="content-ad"></div>

시그널링 서버를 구현하는 데 WebSockets, HTTP 또는 다른 적합한 통신 프로토콜을 사용할 수 있습니다. 시그널링 서버 기술의 선택은 WebRTC 애플리케이션의 특정 요구 사항에 따라 다릅니다.

# Express.js를 사용하여 NodeJs 서버 설정

```js
const debug = require('debug')(`${process.env.APPNAME}:index`);
const app = require('express')();
const server = require('http').Server(app);
const wss = require ('./wss');

const HTTPPORT = 4000;
const WSSPORT = 8090;
// 8090번 포트에서 웹소켓 서버 초기화
wss.init(WSSPORT)
// 4000번 포트에서 HTTP 서버 초기화
server.listen(HTTPPORT, () => {
  debug(`${process.env.APPNAME}가 ${HTTPPORT} 포트에서 실행 중입니다.`);
});
```

# NodeJs의 WebSocket

<div class="content-ad"></div>

```js
const debug = require('debug')(`${process.env.APPNAME}:wss`);
const WebSocket = require('ws');
let channels = {}

function init (port) {
    debug('ws init이 호출되었습니다. 포트:', port)
    const wss = new WebSocket.Server({ port });
    wss.on('connection', (socket) => {
        debug('클라이언트가 연결되었습니다!');
        
        socket.on('error', debug);
        socket.on('message', message => onMessage(wss, socket, message));
        socket.on('close', message => onClose(wss, socket, message));
    })
}
function send(wsClient, type, body) {
    debug('ws 전송', body);
    wsClient.send(JSON.stringify({
        type,
        body,
    }))
}
function clearClient(wss, socket) {
    // 채널 이름과 사용자 ID별 클라이언트 초기화
    Object.keys(channels).forEach((cname) => {
        Object.keys(channels[cname]).forEach((uid) => {
            if (channels[cname][uid] === socket) {
                delete channels[cname][uid]
            }
        })
    })
}
function onMessage(wss, socket, message) {
    debug(`메시지 받음 ${message}`);
    const parsedMessage = JSON.parse(message)
    const type = parsedMessage.type
    const body = parsedMessage.body
    const channelName = body.channelName
    const userId = body.userId
    
    switch (type) {
        case 'join': {
            // 채널 참여
            if (channels[channelName]) {
                channels[channelName][userId] = socket
            } else {
                channels[channelName] = {}
                channels[channelName][userId] = socket
            }
            const userIds = Object.keys(channels[channelName])
            send(socket, '참여함', userIds)
            break;
        }
        case 'quit': {
            // 채널 나가기
            if (channels[channelName]) {
                channels[channelName][userId] = null
                const userIds = Object.keys(channels[channelName])
                if (userIds.length === 0) {
                    delete channels[channelName]
                }
            }
            break;
        }
        case 'send_offer': { 
            // sdp 교환
            const sdp = body.sdp
            let userIds = Object.keys(channels[channelName])
            userIds.forEach(id => {
                if (userId.toString() !== id.toString()) {
                    const wsClient = channels[channelName][id]
                    send(wsClient, 'offer_sdp_received', sdp)
                }
            })
            break;
        }
        case 'send_answer': { 
            // sdp 교환
            const sdp = body.sdp
            let userIds = Object.keys(channels[channelName])
            userIds.forEach(id => {
                if (userId.toString() !== id.toString()) {
                    const wsClient = channels[channelName][id]
                    send(wsClient, 'answer_sdp_received', sdp)
                }
            })
            break;
        }
        case 'send_ice_candidate': {
            const candidate = body.candidate
            let userIds = Object.keys(channels[channelName])
            userIds.forEach(id => {
                if (userId.toString() !== id.toString()) {
                    const wsClient = channels[channelName][id]
                    send(wsClient, 'ice_candidate_received', candidate)
                }
            })
        }
        default:
            break;
    }
}
function onClose(wss, socket, message) {
    debug('닫힘', message);
    clearClient(wss, socket)
}
```

# React에서 WebSocket 사용

```js
import React, {useRef} from 'react';
import {useEffect} from 'react';

const URL_WEB_SOCKET = 'ws://localhost:8090/ws';
function App() {
    const ws = useRef(null);
    useEffect(() => {
        const wsClient = new WebSocket(URL_WEB_SOCKET);
        wsClient.onopen = () => {
            console.log('ws 열림');
            ws.current = wsClient;
            // 카메라 설정 및 채널 참여
            join();
            setupDevice();
        };
        wsClient.onclose = () => console.log('ws 닫힘');
        wsClient.onmessage = (message) => {
            console.log('ws 메시지 받음', message.data);
            const parsedMessage = JSON.parse(message.data);
            switch (parsedMessage.type) {
            case '참여함': {
                const body = parsedMessage.body;
                console.log('이 채널의 사용자들', body);
                break;
            }
            case 'offer_sdp_received': {
                const offer = parsedMessage.body;
                onAnswer(offer);
                break;
            }
            case 'answer_sdp_received': {
                gotRemoteDescription(parsedMessage.body);
                break;
            }
            case 'quit': {
                break;
            }
            default:
                break;
            }
        };
        return () => {
            wsClient.close();
        };
    }, []);
    const sendWsMessage = (type, body) => {
        console.log('sendWsMessage 호출됨', type, body);
        ws.current.send(JSON.stringify({
            type,
            body,
        }));
    };
}
```

const ws = useRef(null)를 사용할 때 주의해야 합니다. 왜 직접 wsClient = new WebSocket(URL_WEB_SOCKET)를 사용하지 않는지 고려해보세요. React Hooks는 다르게 작동하며, ws 변수는 페이지가 다시 렌더링될 때마다 재설정됩니다. WebSocket 연결이 렌더링 간에 지속되도록 하려면 useRef 훅을 사용할 수 있습니다. 이는 클래스의 인스턴스 변수를 사용하는 것과 유사하며, useState 훅과 달리 다시 렌더링에 영향을 받지 않습니다.```

<div class="content-ad"></div>

useRef을 사용하면 컴포넌트의 라이프사이클 동안 WebSocket 인스턴스에 대한 안정적인 참조를 유지할 수 있습니다. 이를 통해 렌더링 업데이트에 영향을 받지 않고 WebSocket 연결을 효과적으로 관리할 수 있습니다. useRef는 주로 렌더링 간에 지속되는 가변 값을 처리하는 데 사용되며 React 컴포넌트에서 WebSocket 연결을 관리하는 데 이상적인 선택지입니다.

시그널링 서버가 준비되면 WebRTC 애플리케이션에서 원격 피어 간에 원활한 오디오 및 비디오 통신을 활성화하고 연결을 설정할 수 있습니다.

# Callee 부분 완료

이제, 우리의 전체 WebRTC 애플리케이션의 마지막 부분에 거의 도달했습니다. 여기서 원격 사용자가 동료로부터 전화를 받을 때 응답 논리를 처리해야 합니다. 이 과정은 이전과 유사하지만, 이번에는 응답 SDP를 생성하고 신호 서버를 통해 호출자에게 반환해야 합니다.

<div class="content-ad"></div>

```js
const onAnswer = (offer) => {
    console.log('onAnswer 함수 실행됨');
    setCallButtonDisabled(true);
    setHangupButtonDisabled(false);

    if (localStream.getVideoTracks().length > 0) {
        console.log(`비디오 장치 사용 중: ${localStream.getVideoTracks()[0].label}`);
    }
    if (localStream.getAudioTracks().length > 0) {
        console.log(`오디오 장치 사용 중: ${localStream.getAudioTracks()[0].label}`);
    }
    localPeerConnection = new RTCPeerConnection(servers, pcConstraints);
    localPeerConnection.onicecandidate = gotLocalIceCandidateAnswer;
    localPeerConnection.onaddstream = gotRemoteStream;
    localPeerConnection.addStream(localStream);
    localPeerConnection.setRemoteDescription(offer);
    localPeerConnection.createAnswer().then(gotAnswerDescription);
};

const gotRemoteStream = (event) => {
    console.log('gotRemoteStream 함수 실행됨');
    const remotePlayer = document.getElementById('peerPlayer');
    remotePlayer.srcObject = event.stream;
};

const gotAnswerDescription = (answer) => {
    console.log('gotAnswerDescription 함수 실행됨:', answer);
    localPeerConnection.setLocalDescription(answer);
};

const gotLocalIceCandidateAnswer = (event) => {
    console.log('gotLocalIceCandidateAnswer 함수 실행됨', event.candidate, localPeerConnection.localDescription);
    // gathering candidate finished, send complete sdp
    if (!event.candidate) {
        const answer = localPeerConnection.localDescription;
        sendWsMessage('send_answer', {
            channelName,
            userId,
            sdp: answer,
        });
    }
};
```

# 라이브 스트리밍 시작

마침내, WebRTC 설정 절차를 성공적으로 완료했습니다. 이제 npm start를 실행하여 웹 앱을 시작하고, 호출자 및 피호출자용 두 개의 웹 페이지를 여십시오. 호출자 페이지에서 Call 버튼을 클릭하면 WebRTC를 통한 라이브 스트리밍이 시작됩니다.

<img src="/assets/img/2024-05-01-GettingStartedwithWebRTCAPracticalGuidewithExampleCode_5.png" />
```

<div class="content-ad"></div>

죄송하지만 이 간단한 데모의 한계를 양해해 주세요. 현재는 호출자와 피 호출자가 모두 동일한 노트북에서 실행되어야 합니다. 현재는 아직 공개적으로 접근할 수 없습니다. 그러나 이 WebRTC 앱을 곧 Vercel.com에 배포할 계획이 있어서 모두가 실제 WebRTC 시나리오를 경험할 수 있게 될 것입니다. 

# 데모 앱 이해하기

아래는 WebRTC API를 사용하는 데 관련된 일반적인 10단계입니다:

- 로컬 장치(예: 마이크, 웹캠)에서 MediaStream을 캡처합니다.
- MediaStream으로부터 URL blob을 획득합니다.
- URL blob을 사용하여 로컬 미디어를 미리 보기합니다.
- RTCPeerConnection 객체를 생성합니다.
- 로컬 스트림을 새로 생성된 연결에 추가합니다.
- 자신의 세션 설명서를 원격 피어에게 전송합니다.
- 원격 피어로부터 수신된 세션 설명서를 받습니다.
- 받은 세션 설명서를 처리하고 원격 스트림을 RTCPeerConnection에 추가합니다.
- 원격 스트림에서 URL blob을 획득합니다.
- URL blob을 사용하여 원격 피어의 오디오와/또는 비디오를 재생합니다.

<div class="content-ad"></div>

종단 간 다이어그램을 통해 이 WebRTC 앱의 전체 프로세스를 완전히 이해할 수 있습니다.

![WebRTC Diagram](/assets/img/2024-05-01-GettingStartedwithWebRTCAPracticalGuidewithExampleCode_6.png)

# 데이터 채널 구현

WebRTC의 데이터 채널은 피어 간 연결에서 무작위 데이터의 양방향 저지연 통신을 가능하게 하는 기능입니다. 오디오 및 비디오에 사용되는 미디어 스트림과는 달리, 데이터 채널은 브라우저 간에 비미디어 데이터를 직접 교환하는 방법을 제공하여 다양한 실시간 애플리케이션에 적합합니다.

<div class="content-ad"></div>

데이터 채널을 구현하려면 RTCPeerConnection 내에 데이터 채널을 생성하고 해당 상태 및 메시지 이벤트를 처리하여 피어 간에 데이터를 교환해야 합니다. Data Channel API는 데이터를 보내는 send()와 통신 이벤트를 처리하는 onmessage, onopen, onclose, onerror와 같은 이벤트를 제공합니다.

# 피어 간 데이터 교환 활성화하기

```js
const createDataChannel = () => {
    try {
        console.log('localPeerConnection.createDataChannel이 호출되었습니다.');
        sendChannel = localPeerConnection.createDataChannel('sendDataChannel', {reliable: true});
    } catch (error) {
        console.error('localPeerConnection.createDataChannel 실패', error);
    }

    sendChannel.onopen = handleSendChannelStateChange;
    sendChannel.onClose = handleSendChannelStateChange;
    localPeerConnection.ondatachannel = gotReceiveChannel;
};
const sendOnClick = () => {
    console.log('sendOnClick이 호출되었습니다.', sendMessage);
    sendChannel.send(sendMessage);
    setSendMessage('');
};
const gotReceiveChannel = (event) => {
    console.log('gotReceiveChannel이 호출되었습니다.');
    receiveChannel = event.channel;
    receiveChannel.onmessage = handleMessage;
    receiveChannel.onopen = handleReceiveChannelStateChange;
    receiveChannel.onclose = handleReceiveChannelStateChange;
};
const handleMessage = (event) => {
    console.log('handleMessage가 호출되었습니다.', event.data);
    setReceiveMessage(event.data);
    setSendMessage('');
};
const handleSendChannelStateChange = () => {
    const readyState = sendChannel.readyState;
    console.log('handleSendChannelStateChange이 호출되었습니다.', readyState);
    if (readyState === 'open') {
        setSendButtonDisabled(false);
    } else {
        setSendButtonDisabled(true);
    }
};
const handleReceiveChannelStateChange = () => {
    const readyState = receiveChannel.readyState;
    console.log('handleReceiveChannelStateChange이 호출되었습니다.', readyState);
};
}
```

# 미디어가 아닌 데이터를 보내고 받기.

<div class="content-ad"></div>

흔히 사용하는 웹 브라우저 음성 및 영상 통화 피어 투 피어 데이터 채널을 성공적으로 구현했습니다. 이를 확인하려면 npm start를 실행하여 웹 앱을 시작하고 두 개의 웹 페이지를 열어보세요. 호출자 페이지에서 "전화" 버튼을 클릭하여 피어 연결을 시작하세요.

연결되면 호출자 텍스트 영역에 "안녕, 세상아!!!"을 입력하고 "전송" 버튼을 클릭하세요.

다음 이미지를 살펴보세요.

![이미지](/assets/img/2024-05-01-GettingStartedwithWebRTCAPracticalGuidewithExampleCode_7.png)

이 메시지가 실시간으로 다른 쪽에서 수신되는 것을 확인할 수 있을 것입니다. 이는 WebRTC의 원활한 데이터 전송 기능을 보여줍니다.

<div class="content-ad"></div>

```markdown
![Getting Started with WebRTC: A Practical Guide with Example Code](/assets/img/2024-05-01-GettingStartedwithWebRTCAPracticalGuidewithExampleCode_8.png)

# 고급 WebRTC 기능

# 최적 성능을 위한 오디오 및 비디오 코덱 관리

품질과 대역폭 소비 사이의 균형을 유지하는 코덱을 선택하세요. WebRTC는 비디오용 VP8, VP9, H.264 및 오디오용 Opus, G.711, G.722와 같은 다양한 코덱을 지원합니다. 코덱 선택 시 대상 장치와 네트워크 상태를 고려하세요. 예를 들어, VP8은 널리 지원되며 좋은 품질을 제공하지만 H.264는 특정 장치에서 하드웨어 가속 디코딩에 적합할 수 있습니다.
```

<div class="content-ad"></div>

# 웹RTC 연결 보안을 위한 암호화

웹RTC는 미디어 스트림을 암호화하기 위해 Datagram Transport Layer Security (DTLS) 프로토콜을 사용합니다. DTLS는 UDP 데이터 전송에 대한 안전한 암호화를 제공합니다. 피어 연결을 설정할 때, 웹RTC는 미디어 스트림을 암호화하기 위한 암호화 키를 협상하고 교환하기 위해 DTLS를 사용합니다.

웹RTC 데이터 채널을 사용하여 미디어가 아닌 데이터를 교환하는 경우, 데이터 채널 메시지를 위해 암호화를 활성화하세요. 데이터 채널은 안전한 데이터 전송을 위해 DTLS 위에 SCTP (Stream Control Transmission Protocol)를 사용합니다.

시그널링 서버와 미디어 서버(사용 중인 경우)가 HTTPS와 WSS(WebSocket Secure)와 같은 안전한 전송 프로토콜을 지원하는지 확인하세요. HTTPS는 시그널링 데이터를 교환하기 위한 안전한 채널을 제공하며, WSS는 웹RTC에서 사용되는 WebSocket 연결의 안전한 통신을 보장합니다.

<div class="content-ad"></div>

# 화면 공유 기능 구현

getUserMedia 또는 navigator.mediaDevices.getDisplayMedia API를 사용하여 사용자의 화면을 캡처하세요. 이 API를 사용하면 사용자가 자신의 화면을 응용 프로그램과 공유할 수 있는 권한을 부여할 수 있습니다. 사용자가 권한을 거부하거나 필요한 권한을 갖고 있지 않은 경우를 처리해야 합니다.

# 성능 최적화를 위해 WebRTC와 WebAssembly 사용하기

WebAssembly은 C, C++, Rust 등의 언어로 작성된 코드를 JavaScript와 함께 브라우저에서 직접 실행할 수 있는 방법을 제공합니다. 네이티브 성능에 근접하면서도 비디오 처리, 이미지 인식, 암호화/복호화와 같은 계산 집약적 작업의 잠재력을 더 효율적으로 실행할 수 있게 합니다.

<div class="content-ad"></div>

성능이 중요한 작업을 WebAssembly 모듈에 분산함으로써, 개발자는 다양한 방법으로 WebRTC 애플리케이션을 최적화할 수 있어요:

- 비디오 및 오디오 처리: WebAssembly은 비디오와 오디오의 인코딩/디코딩, 필터링, 분석을 처리함으로써, 주 JavaScript 스레드의 부담을 줄이고 전반적인 성능을 향상시킬 수 있어요.
- 암호화 및 복호화: WebRTC 데이터 채널은 종종 안전한 통신이 필요합니다. 암호화/복호화 작업에 WebAssembly을 활용하면 처리 속도를 높일 수 있고 데이터 보안을 보장할 수 있어요.
- 인공지능과 머신러닝: 복잡한 AI 알고리즘과 머신러닝 모델은 WebAssembly을 통해 실행할 수 있어요. 이를 통해 WebRTC 애플리케이션 내에서 대용량 데이터셋의 실시간 처리가 가능해져요.

# 끝

축하해요! 이제 WebRTC의 기본을 배우고 기본 비디오 통화 애플리케이션을 만들었어요. 이것은 당신의 WebRTC 여정의 시작에 불과해요. WebRTC의 엄청난 잠재력을 통해 영상 회의에서부터 온라인 게임을 넘어서 다양한 응용 프로그램을 탐험할 수 있어요. 계속 실험해보고, 기술을 발전시키며, 계속 진화하는 WebRTC 세계에 대해 궁금해하는 태도를 유지해보세요.

<div class="content-ad"></div>

실시간 통신이 당신의 손 끝에 있습니다. 이 강력한 기술을 받아들이고 웹 애플리케이션을 다음 차원으로 끌어올려 보세요. 코딩 즐기세요!

# 예제 코드

웹RTC와 React 및 Node.js로 더 깊게 파고들기 위해 GitHub 저장소에서 완전한 구현 코드를 탐색해보세요.

- WebRTC의 예제 코드
- 시그널링 서버의 예제 코드
- Agora의 RTC Web SDK의 예제 코드

<div class="content-ad"></div>

# 더 많은 리딩 자료

- 웹RTC 학습을 시작하는 좋은 출발점입니다.
- 웹RTC와 시그널링 서버의 엔드 투 엔드 예제 코드
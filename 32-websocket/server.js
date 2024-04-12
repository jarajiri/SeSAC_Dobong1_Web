const express = require("express");
const ws = require("ws");
const PORT = 8080;
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// console.log(server); //Server 객체반환
// Server {
//     maxHeaderSize: undefined,
//     insecureHTTPParser: undefined,
//     requestTimeout: 300000,
//     headersTimeout: 60000,
//     keepAliveTimeout: 5000,
//     connectionsCheckingInterval: 30000,
//     requireHostHeader: true,
//     joinDuplicateHeaders: undefined,
//     rejectNonStandardBodyWrites: false,
//     _events: [Object: null prototype] {
//       request: [Function: app] {
//         _events: [Object: null prototype],
//         _eventsCount: 1,
//         _maxListeners: undefined,
//         setMaxListeners: [Function: setMaxListeners],
//         getMaxListeners: [Function: getMaxListeners],
//         emit: [Function: emit],
//         addListener: [Function: addListener],
//         on: [Function: addListener],
//         prependListener: [Function: prependListener],
//         once: [Function: once],
//         prependOnceListener: [Function: prependOnceListener],
//         removeListener: [Function: removeListener],
//         off: [Function: removeListener],
//         removeAllListeners: [Function: removeAllListeners],
//         listeners: [Function: listeners],
//         rawListeners: [Function: rawListeners],
//         listenerCount: [Function: listenerCount],
//         eventNames: [Function: eventNames],
//         init: [Function: init],
//         defaultConfiguration: [Function: defaultConfiguration],
//         lazyrouter: [Function: lazyrouter],
//         handle: [Function: handle],
//         use: [Function: use],
//         route: [Function: route],
//         engine: [Function: engine],
//         param: [Function: param],
//         set: [Function: set],
//         path: [Function: path],
//         enabled: [Function: enabled],
//         disabled: [Function: disabled],
//         enable: [Function: enable],
//         disable: [Function: disable],
//         acl: [Function (anonymous)],
//         bind: [Function (anonymous)],
//         checkout: [Function (anonymous)],
//         connect: [Function (anonymous)],
//         copy: [Function (anonymous)],
//         delete: [Function (anonymous)],
//         get: [Function (anonymous)],
//         head: [Function (anonymous)],
//         link: [Function (anonymous)],
//         lock: [Function (anonymous)],
//         'm-search': [Function (anonymous)],
//         merge: [Function (anonymous)],
//         mkactivity: [Function (anonymous)],
//         mkcalendar: [Function (anonymous)],
//         mkcol: [Function (anonymous)],
//         move: [Function (anonymous)],
//         notify: [Function (anonymous)],
//         options: [Function (anonymous)],
//         patch: [Function (anonymous)],
//         post: [Function (anonymous)],
//         propfind: [Function (anonymous)],
//         proppatch: [Function (anonymous)],
//         purge: [Function (anonymous)],
//         put: [Function (anonymous)],
//         rebind: [Function (anonymous)],
//         report: [Function (anonymous)],
//         search: [Function (anonymous)],
//         source: [Function (anonymous)],
//         subscribe: [Function (anonymous)],
//         trace: [Function (anonymous)],
//         unbind: [Function (anonymous)],
//         unlink: [Function (anonymous)],
//         unlock: [Function (anonymous)],
//         unsubscribe: [Function (anonymous)],
//         all: [Function: all],
//         del: [Function (anonymous)],
//         render: [Function: render],
//         listen: [Function: listen],
//         request: [IncomingMessage],
//         response: [ServerResponse],
//         cache: {},
//         engines: {},
//         settings: [Object],
//         locals: [Object: null prototype],
//         mountpath: '/',
//         _router: [Function]
//       },
//       connection: [Function: connectionListener],
//       listening: [ [Function: setupConnectionsTracking], [Function] ]
//     },
//     _eventsCount: 3,
//     _maxListeners: undefined,
//     _connections: 0,
//     _handle: TCP {
//       reading: false,
//       onconnection: [Function: onconnection],
//       [Symbol(owner_symbol)]: [Circular *1]
//     },
//     _usingWorkers: false,
//     _workers: [],
//     _unref: false,
//     allowHalfOpen: true,
//     pauseOnConnect: false,
//     noDelay: true,
//     keepAlive: false,
//     keepAliveInitialDelay: 0,
//     highWaterMark: 16384,
//     httpAllowHalfOpen: false,
//     timeout: 0,
//     maxHeadersCount: null,
//     maxRequestsPerSocket: 0,
//     _connectionKey: '6::::8080',
//     [Symbol(IncomingMessage)]: [Function: IncomingMessage],
//     [Symbol(ServerResponse)]: [Function: ServerResponse],
//     [Symbol(shapeMode)]: false,
//     [Symbol(kCapture)]: false,
//     [Symbol(async_id_symbol)]: 8,
//     [Symbol(kUniqueHeaders)]: null
//   }
// 웹소켓 서버 접속
const wsServer = new ws.Server({ server });

const sockets = []; // 클라이언트들을 담을 배열

// return string
// 현재 시간관련 타임스탬프와 랜덤문자열을 결합 > 고유 식별자 생성

// 클라이언트마다 고유 ID값을 생성하기 위한함수
function generateUniqueId() {
  const timestamp = Date.now().toString(36); // 36진수로 반환한 문자열
  //   console.log("timestamp--------------", timestamp);
  const randomString = Math.random().toString(36).substring(2);
  // substring(idx)  string 값의 idx 인덱스부터 끝까지 반환
  //   console.log(
  //     "timestamp + randomString----------------",
  //     timestamp + randomString
  //   );
  return timestamp + randomString;
}

/* 
    ws모듈 이벤트
    -connection : 클라이언트와 웹소켓 서버와 연결되었을 때
    -message : 클라이언트로부터 메세지를 받았을 때
    -error : 연결중 오류가 발생했을 때
    -close : 연결이 종료 되었을 때
*/

// connection : 클라이언트와 웹소켓 서버와 연결되었을 때
// 1. 클라이언트 고유 아이디 생성
// 2. 클라이언트 배열(sockets)에 클라이언트 추가
wsServer.on("connection", (socket) => {
  //   console.log("socket--------------", socket); // 클라이언트에 대한 소켓 정보
  const clientId = generateUniqueId();
  console.log(`클라이언트 : ${clientId}가 입장함`);
  // socket은 클라이언트 각각 하나를 의미한다
  // 클라이언트에서 send로 메세지를 보냈을때
  sockets.push(socket); //클라이언트를 sockets[]배열에 추가

  // message : 클라이언트로부터 메세지를 받았을 때
  socket.on("message", (msg) => {
    // console.log(msg); // buffer 객체로 문자열값이 넘어온다
    // const bufftoString = msg.toString("utf-8"); // utf-8로 인코딩
    // console.log(bufftoString);
    console.log(`클라이언트 : ${msg}`);
    /* 
        toString()메서드를 사용하지 않아도
        `${버퍼객체}` 처럼 템플릿 리터럴을 함께 쓰면
        암시적으로 toString()을 호출하는 것과 동일한 의미를 가진다.
    */
    // {"msg":"123","name":"김성민"}
    // client object 로 보낼 경우 제대로 동작하지 않아서 파싱하는 과정이 필요

    // 서버 -> 클라이언트
    // 전체 클라이언트에게 보내기
    sockets.forEach((socket) => {
      socket.send(`${msg}`);
    });
  });

  // error : 연결중 오류가 발생했을 때
  socket.on("error", (err) => {
    console.log("연결 에러 발생", err);
  });

  // close : 연결이 종료 되었을 때
  socket.on("close", () => {
    console.log(`클라이언트(${clientId})와 연결이 종료되었습니다.`);
  });
});

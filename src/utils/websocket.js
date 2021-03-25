let webSocketIP = ``;
let socket = '';
let isFirst = true;

export const createSocket =tid => {
    console.log(tid)
    isFirst = true;
    console.log('establish websocket connection')
    webSocketIP = "ws://192.168.2.54:8088/websocket"
    socket = new WebSocket(webSocketIP);
    socket.onopen = onopenWs;
    socket.onclose = oncloseWs;
    socket.onerror = onerrorWs;
    socket.onmessage = onmessageWs;
 
}
 
const onopenWs = event => {
    console.log("链接", event);
    socket.send("websocket client connect testss");
}
 
const oncloseWs = event => {
    console.log("断开链接", event);
    clearInterval(setIntervalWesocketPush)
}
 
const onerrorWs = event => {
    console.log("出现错误", event);
    clearInterval(setIntervalWesocketPush)
 
}
 
const onmessageWs = event => {
    // console.log(event)
    window.dispatchEvent(new CustomEvent('onmessageWS', {
        detail: {
          data: event,
          isFirst: isFirst
        }
 
    }))
 
    if(isFirst) {
      isFirst = false;
    }
 
}

export default createSocket
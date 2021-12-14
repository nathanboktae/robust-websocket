declare module 'robust-websocket' {
  export default class RobustWebSocket extends WebSocket {
    constructor(streamUri: string | (() => string), options?: {
      timeout?: number;
      shouldReconnect?: (event: CloseEvent, ws: WebSocket) => any;
      automaticOpen?: boolean;
      ignoreConnectivityEvents?: boolean;
    });
  }
}

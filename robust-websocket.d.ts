type ShouldReconnectFn = (event: CloseEvent, ws: WebSocket) => number | boolean;

type Options = {
    timeout?: number;
    shouldReconnect?: ShouldReconnectFn;
    automaticOpen?: boolean;
    ignoreConnectivityEvents?: boolean;
} | ShouldReconnectFn;

export default class RobustWebSocket {
    constructor(
        url: string | ((ws: WebSocket) => string),
        protocols?: string[],
        options?: Options
    );

    attempts: number;
    reconnects: number;
    readyState: number;
    url: string;
    protocol: string;
    extensions: string;
    bufferedAmount: number;
    binaryType: BinaryType;

    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;

    close(code?: number, reason?: string): void;

    dispatchEvent(event: Event): boolean;

    addEventListener(type: "open", callback: (event: Event) => void): void;
    addEventListener(type: "close", callback: (event: CloseEvent) => void): void;
    addEventListener(type: "error", callback: (event: Event) => void): void;
    addEventListener(
        type: "message",
        callback: (event: MessageEvent) => void
    ): void;

    removeEventListener(type: "open", callback: (event: Event) => void): void;
    removeEventListener(
        type: "close",
        callback: (event: CloseEvent) => void
    ): void;
    removeEventListener(type: "error", callback: (event: Event) => void): void;
    removeEventListener(
        type: "message",
        callback: (event: MessageEvent) => void
    ): void;
}

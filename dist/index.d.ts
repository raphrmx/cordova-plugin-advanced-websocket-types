export interface CordovaWebsocketRecvEventCallback {
    (event: CordovaWebsocketEvent): void;
}
export interface CordovaWebsocketSuccessCallback {
    (success: CordovaWebsocketSuccess): void;
}
export interface CordovaWebsocketErrorCallback {
    (error: CordovaWebsocketError): void;
}
export interface CordovaWebsocketEvent extends CordovaWebsocketError {
    callbackMethod: 'onMessage' | 'onClose' | 'onFail';
    webSocketId: string;
    message: string;
}
export interface CordovaWebsocketSuccess {
    webSocketId: string;
    code: number;
}
export interface CordovaWebsocketError extends CordovaWebsocketClose {
    callbackMethod: 'onMessage' | 'onClose' | 'onFail';
    webSocketId: string;
    code: number;
    reason: string;
    exception?: string;
}
export interface CordovaWebsocketClose {
    callbackMethod: 'onMessage' | 'onClose' | 'onFail';
    webSocketId: string;
    code: number;
    reason: string;
}
export interface CordovaWebsocketOptions {
    url: string;
    timeout?: number;
    pingInterval?: number;
    headers?: {
        [key: string]: any;
    };
    acceptAllCerts?: boolean;
}
export interface CordovaWebsocketPlugin {
    wsConnect(options: CordovaWebsocketOptions, receiveCallback?: CordovaWebsocketRecvEventCallback, successCallback?: CordovaWebsocketSuccessCallback, failureCallback?: CordovaWebsocketErrorCallback): void;
    wsSend(webSocketId: string, message: string): void;
    wsClose(webSocketId: string, code?: number, reason?: string): void;
}
declare global {
    interface Window {
        CordovaWebsocketPlugin: CordovaWebsocketPlugin;
    }
}

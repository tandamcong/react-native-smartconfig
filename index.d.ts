declare module 'react-native-smartconfig-esp' {
    function start(config: {
        type: 'esptouch' | 'airkiss',
        ssid: string,
        password: string,
        bssid?: string,
        timeout?: number
    }): Promise<string>;

    function stop(): void;
}
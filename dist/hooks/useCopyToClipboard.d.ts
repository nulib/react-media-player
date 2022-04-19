export declare type CopyStatus = undefined | "copied" | "failed";
export declare const useCopyToClipboard: (text: string, notifyTimeout?: number) => [CopyStatus, () => void];

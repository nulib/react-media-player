export declare const tileSourceResponse: {
    "@context": string;
    "@id": string;
    protocol: string;
    width: number;
    height: number;
    sizes: {
        width: number;
        height: number;
    }[];
    tiles: {
        width: number;
        height: number;
        scaleFactors: number[];
    }[];
    profile: (string | {
        formats: string[];
        qualities: string[];
        supports: string[];
    })[];
    crossOriginPolicy: boolean;
    ajaxWithCredentials: boolean;
    useCanvas: boolean;
    version: number;
    tileSizePerScaleFactor: {};
    tileWidth: number;
    tileHeight: number;
    maxLevel: number;
};

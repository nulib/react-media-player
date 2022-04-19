export interface NodeWebVttCue {
    identifier?: string;
    start: number;
    end: number;
    text: string;
    styles?: string;
}
export interface NodeWebVttCueNested extends NodeWebVttCue {
    children?: Array<NodeWebVttCueNested>;
}
declare const useWebVtt: () => {
    addIdentifiersToParsedCues: (cues: Array<NodeWebVttCue>) => Array<NodeWebVttCue>;
    createNestedCues: (flat: Array<NodeWebVttCue>) => Array<NodeWebVttCue>;
    isChild: (cue: NodeWebVttCue, cues?: Array<NodeWebVttCue>) => boolean;
    orderCuesByTime: (cues?: Array<NodeWebVttCue>) => Array<NodeWebVttCue>;
};
export default useWebVtt;

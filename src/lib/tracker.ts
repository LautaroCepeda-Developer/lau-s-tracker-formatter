const TRACKER_REGEX = /(?:https?|udp):\/\/.*?(?=(?:https?|udp):\/\/|\s|$)/gi;

interface TrackerProcessingOutput {
    total: number,
    unique: number,
    duplicates: number,
    trackers: string[]
}


export function parseTrackers(input: string): string[] {
    const matches = input.match(TRACKER_REGEX)

    if (!matches) {
        return[]
    }

    return matches;
}

export function removeDuplicates(trackers: string[]): string[] {
    return [...new Set(trackers)];
}

export function processTrackers(input:string) : TrackerProcessingOutput {
    const trackers = parseTrackers(input);
    const uniqueTrackers = removeDuplicates(trackers);

    const result : TrackerProcessingOutput = {
        total: trackers.length,
        unique: uniqueTrackers.length,
        duplicates: trackers.length - uniqueTrackers.length,
        trackers: uniqueTrackers
    } ;

    return result;
}

export function formatTrackers(trackers:string[], separator:string="\n"): string {
    return trackers.join(separator)
}
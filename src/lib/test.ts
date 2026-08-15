import { processTrackers, formatTrackers } from "./tracker";

const test_input_01 = `
https://tracker.example.com/announce
udp://tracker.example.org:6969/announce

https://tracker.example.com/announce
http://tracker.example.net/announce
udp://tracker.example.org:6969/announce
`;
const test_input_02 = `https://tracker.example.com/announceudp://tracker.example.org:6969/announcehttps://tracker.example.com/announcehttp://tracker.example.net/announceudp://tracker.example.org:6969/announce`;

const test_result_01 = processTrackers(test_input_01);
const test_result_02 = processTrackers(test_input_02);

console.log("# PRIMER CASO\n");
console.log(test_result_01);
console.log(formatTrackers(test_result_01.trackers));
console.log(formatTrackers(test_result_01.trackers,"\n\n"));

console.log("\n\n# SEGUNDO CASO\n");
console.log(test_result_02);
console.log(formatTrackers(test_result_02.trackers));
console.log(formatTrackers(test_result_02.trackers,"\n\n"));
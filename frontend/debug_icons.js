
import * as si from 'react-icons/si';

console.log("Searching for Amazon icons:");
console.log(Object.keys(si).filter(k => k.toLowerCase().includes('amazon')));

console.log("Searching for AWS icons:");
console.log(Object.keys(si).filter(k => k.toLowerCase().includes('aws')));

console.log("Searching for Google Cloud icons:");
console.log(Object.keys(si).filter(k => k.toLowerCase().includes('google')));

console.log("Searching for Azure icons:");
console.log(Object.keys(si).filter(k => k.toLowerCase().includes('azure')));

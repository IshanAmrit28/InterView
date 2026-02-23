
import * as si from 'react-icons/si';

console.log("Searching for Bash:");
console.log(Object.keys(si).filter(k => k.toLowerCase().includes('bash')));

console.log("Checking SiDotnet:");
console.log(si.SiDotnet ? "Exists" : "Missing");

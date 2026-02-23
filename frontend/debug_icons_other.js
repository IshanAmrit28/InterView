
import * as fa from 'react-icons/fa';
import * as vsc from 'react-icons/vsc';

console.log("Searching for Microsoft in FA:");
console.log(Object.keys(fa).filter(k => k.toLowerCase().includes('microsoft')));

console.log("Searching for Azure in VSC:");
console.log(Object.keys(vsc).filter(k => k.toLowerCase().includes('azure')));

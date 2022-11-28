#!/usr/bin/node
const occurrences = parseInt(process.argv[2]);
occurrences ? (function (occurrences) { for (let i = 0; i < occurrences; i++) console.log('C is fun'); })(occurrences) : console.log('Missing number of occurrences');

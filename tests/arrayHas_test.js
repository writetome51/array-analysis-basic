"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayHas_1 = require("../arrayHas");
var arr = [];
// Test 1: Make sure it returns false when array has no values:
if (arrayHas_1.arrayHas('', arr))
    console.log('test 1 failed');
else
    console.log('test 1 passed');
// Test 2: Make sure it returns false when it does have values but not the requested one:
arr = [1, 2, 3];
if (arrayHas_1.arrayHas(4, arr))
    console.log('test 2 failed');
else
    console.log('test 2 passed');
// Test 3: Make sure it returns true when it does have requested value:
arr = [1, 2, 3, 4];
if (arrayHas_1.arrayHas(4, arr))
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4: Make sure it can find both primitives and arrays:
arr = [1.05, 10, true, false, 'xdfhT!@#$%^&*()', [1.05]];
var results = [], i = -1;
while (++i < arr.length) {
    results.push(arrayHas_1.arrayHas(arr[i], arr));
}
if (results.length === arr.length && !results.includes(false) && !results.includes(undefined)) {
    console.log('test 4 passed');
}
else
    console.log('test 4 failed');
// Test 5: Make sure it can spot slight differences:
arr = [1.05, 10, true, false, 'xdfhT!@#$%^&*()', [1.05555]];
if (arrayHas_1.arrayHas([1.0555], arr)) {
    console.log('test 5 failed');
}
else
    console.log('test 5 passed');
// Test 6: If second argument is not array, it triggers error:
var errorTriggered = false;
try {
    arrayHas_1.arrayHas('', '');
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 failed');

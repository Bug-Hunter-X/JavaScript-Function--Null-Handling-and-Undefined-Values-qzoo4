# JavaScript Function Bug: Null and Undefined Handling

This repository demonstrates a common error in JavaScript functions:  incompletely handling null and undefined values. The `foo` function adds two numbers, but only explicitly checks for `null` values. This can lead to runtime errors if either input is `undefined`.

The `bug.js` file contains the buggy code.  `bugSolution.js` provides a corrected version which uses stricter nullish coalescing or type checking for a more robust solution. 

## Bug Description
The original function fails when an argument is `undefined`. Javascript will attempt to perform arithmetic with `undefined` resulting in `NaN` and potential unexpected behavior.

## Solution
The solution employs either the nullish coalescing operator (`??`) or a type check (`typeof`) to gracefully handle both `null` and `undefined` values.
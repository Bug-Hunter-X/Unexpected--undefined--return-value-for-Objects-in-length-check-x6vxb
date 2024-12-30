# Unexpected 'undefined' return value for Objects in length check

This repository demonstrates a common JavaScript error related to checking the length property of objects that are not arrays. The original code incorrectly assumes that any non-null, non-undefined value will have a length property, leading to unexpected undefined results when an object (not an array) is passed as an argument.

The `bug.js` file contains the buggy code, while `bugSolution.js` offers a corrected version that addresses this issue by explicitly checking if the input is an array before accessing the length property.

## Bug Description
The function `foo` is intended to return the length of an array. However, it incorrectly returns `undefined` when an object (that isn't an array) is passed as an argument because objects do not have a `length` property.  This can lead to unexpected errors and runtime issues in your application.

## Solution
The solution involves adding a check to ensure that the input is actually an array before attempting to access the `length` property.  This avoids the `undefined` return value and ensures that the function behaves as expected in all cases.
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @volkanb/lotide`

**Require it:**

`const _ = require('@volkanb/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns input arrray's head(first element).
* `tail(array)`: Returns input array without the head(first element).
* `middle(array)`: Returns the middle element(s) of the given array.
* `map(array)`: Works the same as JS Array map method.
* `without(array, itemsToRemove)`: Removes specified elements from the input array
* `takeUntil(array, callback)`: Applies callback function with each element and returns the portion of the input array until callback returns true.
* `countLetters(string)`: Returns an object with frequencies of the letters in the input string.
* `countOnly(allItems, itemsToCount)`:  Returns an object containing counts of everything in allItems that the itemsToCount object listed.
* `findKey(object, callback)`:  Returns the first key in the object for which the callback returns a truthy value.
* `findKeyByValue(object, value)`: Returns the first key in object which contains the given value.
* `letterPositions(string)`: Returns an object specifying the position index(es) for each letter in the string.
* `eqArrays(arr1, arr2)`: Returns true if given arrays are equal.
* `eqObjects(obj1, obj2)`: Returns true if given objects are equal.
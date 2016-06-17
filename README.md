# object-from-entries [![Build Status](https://travis-ci.org/ckknight/object-from-entries.svg?branch=master)](https://travis-ci.org/ckknight/object-from-entries)
Convert entries to an Object

Intended to be the inverse of [Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

## Install

```bash
$ npm install --save object-from-entries
```

## Usage

```js
const objectFromEntries = require('object-from-entries');

objectFromEntries([['foo', 'bar'], ['baz', 123]])
//=> {foo: 'bar', baz: 123}

objectFromEntries([])
//=> {}

objectFromEntries(Object.entries({foo: 1, bar: 2, baz: 3}))
//=> {foo: 1, bar: 2, baz: 3}
```

## API

### objectFromEntries(entries)

Enumerates the entries of `entries`, which are expected to be 2-length arrays (a.k.a. tuples) and creates an object from those entries.

## Resources

- [Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

## License
MIT © [Cameron Knight](https://github.com/ckknight)

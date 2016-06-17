'use strict';
var assert = require('assert');
var objectFromEntries = require('.');

it('has the correct length', function () {
  assert.equal(objectFromEntries.length, 1);
});

it('throws on null entries', function () {
  assert.throws(function () {
    objectFromEntries(null);
  });
});

it('throws on undefined entries', function () {
  assert.throws(function () {
    objectFromEntries(undefined);
  });
});

it('returns an empty object when given an empty array', function () {
  assert.deepEqual(objectFromEntries([]), {});
});

it('returns the correct object when given a single-entry array', function () {
  assert.deepEqual(objectFromEntries([['alpha', 'bravo']]), {alpha: 'bravo'});
});

it('returns the correct object when given an entry without a value', function () {
  assert.deepEqual(objectFromEntries([['alpha']]), {alpha: undefined});
});

it('returns the correct object when given an entry without a key or value', function () {
  assert.deepEqual(objectFromEntries([[]]), {undefined: undefined});
});

it('returns the correct object when given an entry with more than 2 items', function () {
  assert.deepEqual(objectFromEntries([['alpha', 'bravo', 'charlie']]), {alpha: 'bravo'});
});

it('returns the correct object when given a multi-entry array', function () {
  assert.deepEqual(objectFromEntries([
    ['alpha', 'bravo'],
    ['charlie', 'delta'],
    ['echo', 'foxtrot']
  ]), {
    alpha: 'bravo',
    charlie: 'delta',
    echo: 'foxtrot'
  });
});

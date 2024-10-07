// index.ts
import * as _ from "lodash";

// example from lodash documentation
var users = [
    {'user': 'barney', 'age': 36, 'active': true},
    {'user': 'fred', 'age': 40, 'active': false},
    {'user': 'pebbles', 'age': 1, 'active': true}
];


/**
 * Update the file @types/lodash/common/collection.d.ts to include the following type definitions:
 */

// Exercise 1:
_.size([1, 2, 3]);
_.size({'a': 1, 'b': 2});
_.size('pebbles');

// Exercise 2:
_.includes([1, 2, 3], 1);
_.includes([1, 2, 3], 1, 2);
_.includes({'a': 1, 'b': 2}, 1);
_.includes('pebbles', 'eb');

// Exercise 3:
_.find(users, function (o) {
    return o.age < 40;
});
_.find(users, {'age': 1, 'active': true});
_.find(users, ['active', false]);
_.find(users, 'active');

// Exercise 4:
_.countBy([6.1, 4.2, 6.3], Math.floor);
_.countBy(['one', 'two', 'three'], 'length');

// Exercise 5:
_.map(users, 'user');
_.map(users, function (u, idx, arr) {
    return `${idx}/${arr.length}: user: ${u.user}, age: ${u.age}, active: ${u.active}` ;
});
const words = ['one', 'two', 'three'];
_.map(words, 'length');
const obj = { 'a': 1, 'b': 2, 'c': 3 };
_.map(obj, (value) => value);
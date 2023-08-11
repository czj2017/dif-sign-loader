function createPattern(prefix, condition) {
    return new RegExp(`(${prefix}((\\s|\\t)*)#if[\\s|\\t](${condition}))((.|\\n)*?)${prefix}((\\s|\\t)*)#endif((\\s|\\t)*)`, 'sg');
}

let htmlAllpattern = createPattern('<!--', '.*?');
let htmlSmallpattern = createPattern('<!--', '.*?');
let htmlAllNopattern = createPattern('<!--', 'not .*?');
let htmlSmallNopattern = createPattern('<!--', 'not .*?');

let javascriptAllpattern = createPattern('//', '.*?');
let javascriptSmallpattern = createPattern('//', '.*?');
let javascriptAllNopattern = createPattern('//', 'not .*?');
let javascriptSmallNopattern = createPattern('//', 'not .*?');

module.exports = {
  htmlAllpattern,
  htmlSmallpattern,
  htmlAllNopattern,
  htmlSmallNopattern,
  javascriptAllpattern,
  javascriptSmallpattern,
  javascriptAllNopattern,
  javascriptSmallNopattern
}

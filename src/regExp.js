let htmlAllpattern = new RegExp(`<!--((\\s|\\t)*)#if[\\s|\\t](.*?)<!--((\\s|\\t)*)#endif((\\s|\\t)*)-->`, 'sg');
let htmlSmallpattern = new RegExp(`<!--((\\s|\\t)*)#if[\\s|\\t](.*?)-->`, 'sg');
let htmlAllNopattern = new RegExp(`<!--((\\s|\\t)*)#ifnot[\\s|\\t](.*?)<!--((\\s|\\t)*)#endif((\\s|\\t)*)-->`, 'sg');
let htmlSmallNopattern = new RegExp(`<!--((\\s|\\t)*)#ifnot[\\s|\\t](.*?)-->`, 'sg');

let javascriptAllpattern = new RegExp(`//((\\s|\\t)*)#if[\\s|\\t](.*?)//((\\s|\\t)*)#endif((\\s|\\t)*)`, 'sg');
let javascriptSmallpattern = new RegExp(`//((\\s|\\t)*)#if[\\s|\\t](.*?)\\n`, 'sg');
let javascriptAllNopattern = new RegExp(`//((\\s|\\t)*)#ifnot[\\s|\\t](.*?)//((\\s|\\t)*)#endif((\\s|\\t)*)`, 'sg');
let javascriptSmallNopattern = new RegExp(`//((\\s|\\t)*)#ifnot[\\s|\\t](.*?)\\n`, 'sg');

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
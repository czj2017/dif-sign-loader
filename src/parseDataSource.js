
let count = 0
const parseDataSource = function (resource, difsign, allpattern, smallpattern, flag) {
  let mallpatternResultExp = new RegExp(`[\\s|\\t]${difsign}[\\s|\\t]`);
  return resource.replace(allpattern, function (...arr) {
    let replaceStr = arr[0];
    let smallpatternResult = replaceStr.match(smallpattern) && replaceStr.match(smallpattern)[0];
    if (flag) {
      return mallpatternResultExp.test(smallpatternResult) ? "" : replaceStr
    } else {
      return mallpatternResultExp.test(smallpatternResult) ? replaceStr : ""
    }
  })
}


module.exports = { parseDataSource }

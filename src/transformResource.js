"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const DifSignLoaderError = require('./error')
const {
    htmlAllpattern,
    htmlSmallpattern,
    htmlAllNopattern,
    htmlSmallNopattern,
    javascriptAllpattern,
    javascriptSmallpattern,
    javascriptAllNopattern,
    javascriptSmallNopattern
} = require('./regExp')
const { parseDataSource } = require('./parseDataSource')

/**
 * **处理数据源**
 * @method transformResource
 *
 * @param {String} resource 数据源
 * @param {Object} options 选项
 *
 * @return {String}  Result
 */
const transformResource = function (resource, options = {}) {
    const { difsign } = options
    if (!difsign) {
        console.log(new DifSignLoaderError({
            title: 'loader',
            detail: 'options尚未配置difsign'
        }).message)
    }

    let result = resource

    // <!-- --> html 
    result = parseDataSource(result, difsign, htmlAllpattern, htmlSmallpattern, false)
    result = parseDataSource(result, difsign, htmlAllNopattern, htmlSmallNopattern, true)
    // // javascript 
    result = parseDataSource(result, difsign, javascriptAllpattern, javascriptSmallpattern, false)
    result = parseDataSource(result, difsign, javascriptAllNopattern, javascriptSmallNopattern, true)


    // /***css */

    return result
}

module.exports = { transformResource };
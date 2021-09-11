"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

const { getOptions } = require('loader-utils');
const { transformResource } = require('./src/transformResource')

const defaults = {
    noCache: false,
    difsign: "PRODUCTION"
}

/**
 * **difsign Loader**
 * @method loader
 *
 * @param {String} resource Source
 * @param {Object} map Source Map
 *
 * @return {String} difResource Result
 */
function loader(resource) {//此处不能用箭头函数 this指向有问题
    const options = Object.assign({}, defaults, getOptions(this));
    if (this.cacheable && options.noCache) {
        this.cacheable(false);//关闭缓存
    }
    let difResource = transformResource(resource, options)
    return difResource
}

module.exports = loader;

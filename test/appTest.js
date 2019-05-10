/*global require, module,  __dirname, console, const */
/* eslint-env es6 */
/* eslint-disable */
'use strict'

const assert = require('chai').assert;
const progm = require('../progm');

describe('App',function(){
    it('app should return Hello', function(){
        assert.equal(progm.hello(),'Hello');
    });
});
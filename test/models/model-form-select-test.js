/* eslint no-unused-expressions: 0 */

'use strict';

const Model = require('../../src/models/model-form-select');

let selectModel = {};

describe('ModelFormInput', function() {

    before(function() {

        selectModel = new Model();

    });

    it('should be a Backbone Model', function() {

        chai.expect(selectModel).to.be.instanceof(global.Backbone.Model);

    });

    it('should not validate a selected input against model criteria', function() {

        selectModel.set('value', 'SetValue');
        chai.expect(selectModel.validate()).to.be.true;

    });

});

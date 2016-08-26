/* eslint no-unused-expressions: 0 */

'use strict';

const Model = require('../../src/models/model-form-textarea');

let textareaModel = {};

describe('ModelFormTextarea', function() {

    before(function() {

        textareaModel = new Model();

    });

    it('should be a Backbone Model', function() {

        chai.expect(textareaModel).to.be.instanceof(global.Backbone.Model);

    });

    it('should have the correct model attribute values', function() {

        chai.expect(textareaModel.attributes).to.have.property('rows', 2);

    });

});

/* eslint no-unused-expressions: 0 */

'use strict';

const Model = require('../../src/models/model-form-password');

let inputModel = {};

describe('ModelFormInput', function() {

    before(function() {

        inputModel = new Model();

    });

    it('should be a Backbone Model', function() {

        chai.expect(inputModel).to.be.instanceof(global.Backbone.Model);

    });

    it('should have the correct model attribute values', function() {

        chai.expect(inputModel.attributes).to.have.property('type', 'password');
        chai.expect(inputModel.attributes).to.have.property('min', 6);

    });

});

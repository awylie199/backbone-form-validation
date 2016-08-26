/* eslint no-unused-expressions: 0 */

'use strict';

const Model = require('../../src/models/model-form-input');

let inputModel = {};

describe('ModelFormInput', function() {

    before(function() {

        inputModel = new Model();

    });

    it('should be a Backbone Model', function() {

        chai.expect(inputModel).to.be.instanceof(global.Backbone.Model);

    });

    it('should have the correct model attribute values', function() {

        chai.expect(inputModel.attributes).to.have.property('type', 'text');
        chai.expect(inputModel.attributes).to.have.property('min', 1);

    });

    it('should not validate an invalid a too short input value', function() {

        inputModel.set('min', 5);
        inputModel.set('value', 'Hi');
        chai.expect(inputModel.validate()).to.be.false;

    });

    it('should not validate an invalid a too long input value', function() {

        inputModel.set('max', 5);
        inputModel.set('value', 'Hellooooooo');
        chai.expect(inputModel.validate()).to.be.false;

    });

});

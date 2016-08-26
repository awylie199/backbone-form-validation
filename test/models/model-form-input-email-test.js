/* eslint no-unused-expressions: 0 */

'use strict';

const Model = require('../../src/models/model-form-input-email');

let emailModel = {};

describe('ModelFormEmail', function() {

    before(function() {

        emailModel = new Model();

    });

    it('should be a Backbone Model', function() {

        chai.expect(emailModel).to.be.instanceof(global.Backbone.Model);

    });

    it('should have the correct model attribute values', function() {

        chai.expect(emailModel.attributes).to.have.property('type', 'email');
        chai.expect(emailModel.attributes).to.have.property('pattern', '\\S+@\\S');

    });

    it('should not validate an invalid email address', function() {

        emailModel.set('value', 'abc');
        chai.expect(emailModel.validate()).to.be.false;

    });

    it('should not validate an invalid email address', function() {

        emailModel.set('value', 'abc@co.uk');
        chai.expect(emailModel.validate()).to.be.true;

    });

});

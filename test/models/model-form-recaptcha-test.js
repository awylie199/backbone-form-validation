/* eslint no-unused-expressions: 0 */

'use strict';

const Model = require('../../src/models/model-form-recaptcha');

let recaptchaModel = {};

global.grecaptcha = {
    getResponse() {

        return 'Success';

    }
};

describe('ModelFormRecaptcha', function() {

    before(function() {

        recaptchaModel = new Model({
            id: 'recaptcha-test-id'
        });

        global.recaptchaIds = {
            'recaptcha-test-id': 123123
        };

    });

    it('should be a Backbone Model', function() {

        chai.expect(recaptchaModel).to.be.instanceof(global.Backbone.Model);

    });

    it('should have the correct model attribute values', function() {

        chai.expect(recaptchaModel.attributes).to.have.property('type', 'text');
        chai.expect(recaptchaModel.attributes).to.have.property('min', 0);

    });

    it('should validate completed recaptcha', function() {

        chai.expect(recaptchaModel.validate()).to.be.true;

    });

});

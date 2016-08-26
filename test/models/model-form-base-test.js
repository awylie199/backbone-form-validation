'use strict';

const Model = require('../../src/models/model-form-base');

let input = document.createElement('input'),
    $input = $(input),
    attributes = {},
    inputModel = {};

describe('ModelFormBase', function() {

    before(function() {

        $input.attr({
            name: 'test-model-name',
            label: 'test-model-label',
            value: 999,
            errorDisplayMsg: 'Please complete the form input.',
            required: false
        });
        attributes = $input.getAttributes();
        inputModel = new Model(attributes);

    });

    it('should be a Backbone Model', function() {

        chai.expect(inputModel).to.be.instanceof(global.Backbone.Model);

    });

    it('should have the correct model attribute values', function() {

        chai.expect(inputModel.attributes).to.have.property('name', 'test-model-name');
        chai.expect(inputModel.attributes).to.have.property('label', 'test-model-label');
        chai.expect(inputModel.attributes).to.have.property('value', '999');
        chai.expect(inputModel.attributes).to.have.property('errorDisplayMsg', 'Please complete the form input.');
        chai.expect(inputModel.attributes).to.have.property('required', false);

    });

    it('should return model value', function() {

        chai.expect(+inputModel.get('value')).to.equal(999);

    });

    it('should set an error message for the input', function() {

        let errorMessage = 'New Error Message';

        inputModel.setError(errorMessage);
        chai.expect(inputModel.get('errorMessages')).to.include.members([errorMessage]);

    });

});

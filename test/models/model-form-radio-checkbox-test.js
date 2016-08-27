/* eslint no-unused-expressions: 0 */

'use strict';

const Model = require('../../src/models/model-form-radio-checkbox');

let checkboxRadioModel = {};

describe('ModelFormRadioCheckbox', function() {

    before(function() {

        checkboxRadioModel = new Model({
            type: 'radio'
        });

    });

    it('should be a Backbone Model', function() {

        chai.expect(checkboxRadioModel).to.be.instanceof(global.Backbone.Model);

    });

    it('should have the correct model attribute values', function() {

        chai.expect(checkboxRadioModel.attributes).to.have.property('requiredNumber', 0);
        chai.expect(checkboxRadioModel.attributes).to.have.property('checkedOptions');

    });

    it('should validate a valid number of selections', function() {

        let $option = $('<input type="radio" value="one" checked="checked" />');

        console.log($option);

        checkboxRadioModel.set('requiredNumber', 1);
        checkboxRadioModel.set('checkedOptions', $option);

        chai.expect(checkboxRadioModel.validate()).to.be.true;

    });

});

/* eslint no-unused-expressions: 0 */

'use strict';

const Model = require('../../src/models/model-form-money');

let inputModel = {};

describe('ModelFormMoneyInput', function() {

    before(function() {

        inputModel = new Model();

    });

    it('should be a Backbone Model', function() {

        chai.expect(inputModel).to.be.instanceof(global.Backbone.Model);

    });

    it('should have the correct model attribute values', function() {

        chai.expect(inputModel.attributes).to.have.property('currencySymbol', '$');
        chai.expect(inputModel.attributes).to.have.property('min', 1);
        chai.expect(inputModel.attributes).to.have.property('max', 2000);

    });

    /**
     * @todo Babelify transform not working with Mochify
     */
    // it('should only hold a numeric value up to the maximum amount', function() {

    //     let maxAmount = inputModel.get('max');

    //     inputModel.set('value', '$3000');
    //     chai.expect(inputModel.attributes.value).to.equal(+maxAmount);

    //     inputModel.set('value', 'zxczcasd');
    //     chai.expect(inputModel.attributes.value).to.equal(0);

    //     inputModel.set('value', 1500);
    //     chai.expect(inputModel.attributes.value).to.equal(1500);

    // });

});

/* eslint no-unused-expressions: 0 */

'use strict';

const Backbone = require('Backbone');

let Model = require('../../src/models/model-form-input'),
    Collection = require('../../src/collections/collection-form')(Model),
    inputOne = {},
    inputTwo = {},
    inputCollection = {};

describe('FormInputCollection', function() {

    before(function() {

        inputOne = new Model({
            id: 'model-one'
        });
        inputTwo = new Model({
            id: 'model-two'
        });

        inputCollection = new Collection([
            inputOne,
            inputTwo
        ]);

        // let $stub = sinon.stub(global.$.fn);

        // $stub.withArgs('#model-one').returns(
        //     [document.createElement('input')]
        // );
        // $stub.withArgs('#model-two').returns(
        //     [document.createElement('input')]
        // );

    });

    beforeEach(function() {

        inputOne.set('min', 5);
        inputOne.set('value', 123);

        inputTwo.set('min', 3);
        inputTwo.set('max', 7);
        inputTwo.set('value', 12345678);

    });

    it('should be a Backbone Collection', function() {

        chai.expect(inputCollection).to.be.instanceof(Backbone.Collection);

    });

    it('should contain a group of InputModels', function() {

        chai.expect(inputCollection.models).to.have.lengthOf(2);

    });

    it('should validate when all inputs are validated', function() {

        inputOne.set('value', 123456);
        inputTwo.set('value', 123456);

        chai.expect(inputCollection.validateClient()).to.be.true;

    });

    it('should return validation errors for each input', function() {

        let errors = [];

        inputCollection.validateClient();

        errors = inputCollection.getRawValidationErrors();

        chai.expect(errors).to.have.lengthOf(2);
        chai.expect(errors).to.include({
            $input: inputOne,
            errors: inputOne.get('errorMessages')
        });
        chai.expect(errors).to.include({
            $input: inputTwo,
            errors: inputTwo.get('errorMessages')
        });

    });

    it('should return HTML for the current validation errors', function() {

        let errorHtml = inputCollection.getValidationErrorsHtml();

        chai.expect(errorHtml).to.have.lengthOf(2);
        chai.expect(errorHtml[0]).to.match('ul');
        chai.expect(errorHtml[1]).to.match('ul');
        chai.expect(errorHtml[0]).to.have.descendants('li');
        chai.expect(errorHtml[1]).to.have.descendants('li');

    });

    it('should clear validation errors', function() {

        let errors = [];

        inputCollection.clearValidationErrors();
        errors = inputCollection.getRawValidationErrors();
        chai.expect(errors).to.have.lengthOf(0);

    });

    it('should append validation error HTML to the input', function() {

        let errors = inputCollection.getRawValidationErrors();
        inputCollection.appendValidationErrors();
        chai.expect(errors[0].$input.next()).to.match('ul');
        chai.expect(errors[1].$input.next()).to.match('ul');

    });

});

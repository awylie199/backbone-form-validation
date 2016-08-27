'use strict';

const Backbone = require('Backbone'),
    Model = require('../../src/models/model-form-input'),
    input = document.createElement('input'),
    model = new Model(input),
    View = require('../../src/views/view-form-input')(model),
    view = new View();

describe('InputView', function() {

    it('should be a Backbone View', function() {

        chai.expect(view).to.be.instanceof(Backbone.View);

    });

    it('should use an Input Backbone Model', function() {

        chai.expect(view.model).to.be.instanceof(Model);

    });

    it('should change the model value when its value changes', function() {

        view.$el.val(999);
        view.$el.trigger('change');
        chai.expect(+model.get('value')).to.equal(999);

    });

});

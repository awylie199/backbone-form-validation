'use strict';

describe('getAttributes', function() {

    it('should be a jQuery function', function() {

        chai.expect(
            $.fn.getAttributes,
            'getAttributes is a fn'
        ).to.be.a('function');

    });

    it('should have two attributes with values', function() {

        let $elem = $('<div></div>', {
                class: 'test-class',
                'data-spando': 'true'
            }),
            attributes = $elem.getAttributes();

        chai.expect(Object.keys(attributes)).to.have.lengthOf(2);
        chai.expect(attributes.class).to.equal('test-class');
        chai.expect(attributes['data-spando']).to.equal('true');

    });

    it('should return an object', function() {

        let $attributes = $('<div></div>', {
            id: 'object__id'
        });

        chai.expect($attributes.getAttributes()).to.be.a('object');

    });

});

/* eslint no-console: 0 */

'use strict';

const $ = require('jquery');

module.exports = (function() {

    if (!('getAttributes' in $.fn)) {

        /**
         * Get all attributes from element
         * @return {Object}         Element's DOM Attributes Hash
         */
        $.fn.getAttributes = function() {

            let attributes = {};

            if (this.length) {

                $.each(this[0].attributes, function(index, attr) {

                    attributes[attr.name] = attr.value;

                });

            }

            return attributes;

        };

    } else {

        console.log('getAttributes is already defined on jQuery');

    }

}());

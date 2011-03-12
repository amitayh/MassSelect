/*
---
description: Adds 2 buttons after a select box that enables user to select / unselect all options quickly

license: MIT-style

authors:
- Amitay Horwitz

requires:
- core/1.3.1: '*'

provides:
- MassSelect

...
*/

Element.implement({
    selectAll: function() {
        this.getElements('option').set('selected', true);
        this.fireEvent('change');
        return this;
    },
    selectNone: function() {
        this.getElements('option').set('selected', false);
        this.fireEvent('change');
        return this;
    },
    select: function(values) {
        // Values map is created for performance reasons. Iterate over the array only once.
        var map = {};
        Array.from(values).each(function(value) { map[String.from(value)] = true; });
        this.getElements('option').each(function(option) {
            if (map[option.get('value')]) {
                option.set('selected', true);
            }
        });
        this.fireEvent('change');
        return this;
    }
});

(function($) {

this.MassSelect = new Class({

    Implements: [Options, Events],

    options: {
        all: {'text': 'Select All', 'class': 'select-all'},
        none: {'text': 'Select None', 'class': 'select-none'},
        container: {'class': 'mass-select'},
        spacer: ' | '
    },

    initialize: function(select, options) {
        this.setOptions(options);
        this.select = $(select);
        var container = new Element('div', this.options.container),
            all = new Element('span', this.options.all),
            none = new Element('span', this.options.none);
        
        // Add events
        all.addEvent('click', this.onSelectAll.bind(this));
        none.addEvent('click', this.onSelectNone.bind(this));

        // Add to DOM
        container.grab(all)
                 .appendText(this.options.spacer)
                 .grab(none)
                 .inject(this.select, 'after');
    },

    onSelectAll: function() {
        this.select.selectAll();
        this.fireEvent('selectAll');
    },

    onSelectNone: function() {
        this.select.selectNone();
        this.fireEvent('selectNone');
    }

});

})(document.id);
# MassSelect #

Adds 2 buttons after a select box that enables user to select / unselect all options quickly

## How to use ##

### Syntax ###

    #JS
    new MassSelect(select[, options]);

### Arguments ###

1. select - (string) A string of the id for an Element, (element) Element reference - the select box
2. options - (object) a key/value set of options

### Options ###

- all - (object) element attributes to be applied on the "select all" button
- none - (object) element attributes to be applied on the "select none" button
- container - (object) element attributes to be applied on buttons' container
- spacer - (string) text to separate the buttons

### Events ###

- selectAll - (function) callback to execute when the user clicked the "select all" button
- selectNone - (function) callback to execute when the user clicked the "select none" button
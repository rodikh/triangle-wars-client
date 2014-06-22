(function (window) {
    'use strict';

    var Unit = function (options) {
        console.log('Base Unit Created');
        this.x = options.x || 100;
        this.y = options.y || 100;
        this.rot = options.rot || 0;
        this.model = options.model || 'red-frigate';
        this.faction = options.faction || 'red';
        this.updated = true;
    };

    Unit.prototype.unitTick = function () {
        // updated will decide if rerendering is needed
        var updated = false;
        this.rot += 1;
        updated = true;
        return updated;
    };

    window.Unit = Unit;
} (window));
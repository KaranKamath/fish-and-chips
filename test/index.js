var should = require('chai').should(),
    fishAndChips = require('../index'),
    toAmerican = fishAndChips.toAmerican;

describe('#toAmerican', function() {
    it('converts capitalise to capitalize', function() {
        toAmerican('text-transform: capitalise;').should.equal(
            'text-transform: capitalize;');
    });

    it('converts centre to center', function() {
        toAmerican('float: centre;').should.equal('float: center;');
    });

    it('converts colour to color', function() {
        toAmerican('background-colour: yellow;').should.equal(
            'background-color: yellow;');
    });
});

const assert = require('chai').assert;

const Utility = require('../class_gambler');



describe('Gambler Testing', function () {
    it('Testing Stake Amount if player wins', function () {
        let result = Utility.getGambler(1);
        assert.equal(result, 150);
    });
    it('Testing Stake Amount if player lose', function () {
        let result = Utility.getGambler(0);
        assert.equal(result, 50);
    });


});

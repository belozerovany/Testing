const assert = require('assert');
import { getDay } from './tools';

describe('getDay', function() {
    it('should return day number from new Date().getDay()', () => {
        assert.equal(getDay(), new Date().getDay());
    });
});